import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { spawn } from "node:child_process"
import puppeteer from "puppeteer"

const DIST_DIR = path.resolve(process.cwd(), "dist")
const HOST = "127.0.0.1"
const PORT = 4173
const BASE_URL = `http://${HOST}:${PORT}`
const ROUTES = ["/", "/menu", "/il-locale", "/eventi", "/chi-siamo", "/contatti"]

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(url, retries = 30, delay = 500) {
  for (let i = 0; i < retries; i += 1) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        return
      }
    } catch {
      // Server not ready yet.
    }
    await wait(delay)
  }

  throw new Error(`Preview server not reachable at ${url}`)
}

function routeToOutputPath(route) {
  if (route === "/") {
    return path.join(DIST_DIR, "index.html")
  }

  const cleanRoute = route.replace(/^\//, "")
  return path.join(DIST_DIR, cleanRoute, "index.html")
}

async function prerenderRoute(page, route) {
  const targetUrl = new URL(route, `${BASE_URL}/`).toString()
  await page.goto(targetUrl, { waitUntil: "networkidle0" })

  const html = await page.content()
  const outPath = routeToOutputPath(route)
  await mkdir(path.dirname(outPath), { recursive: true })
  await writeFile(outPath, html, "utf8")

  console.log(`Prerendered ${route} -> ${path.relative(process.cwd(), outPath)}`)
}

async function main() {
  const preview = spawn(
    "npm",
    ["run", "preview", "--", "--host", HOST, "--port", String(PORT), "--strictPort"],
    { stdio: "inherit" },
  )

  try {
    await waitForServer(BASE_URL)

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1440, height: 900 })

      for (const route of ROUTES) {
        await prerenderRoute(page, route)
      }
    } finally {
      await browser.close()
    }
  } finally {
    preview.kill("SIGTERM")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
