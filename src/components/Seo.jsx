import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const SITE_NAME = "Volée Bologna"
const SITE_URL = "https://voleebologna.it"
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

function normalizePath(inputPath) {
  if (!inputPath || inputPath === "/") {
    return "/"
  }

  return inputPath.endsWith("/") ? inputPath : `${inputPath}/`
}

function upsertMeta(selector, attr, value, content) {
  let meta = document.head.querySelector(selector)
  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute(attr, value)
    document.head.appendChild(meta)
  }
  meta.setAttribute("content", content)
}

function upsertLink(selector, rel, href) {
  let link = document.head.querySelector(selector)
  if (!link) {
    link = document.createElement("link")
    link.setAttribute("rel", rel)
    document.head.appendChild(link)
  }
  link.setAttribute("href", href)
}

function Seo({ title, description, path, image = DEFAULT_IMAGE, noindex = false, structuredData = null }) {
  const location = useLocation()

  useEffect(() => {
    const currentPath = normalizePath(path || location.pathname)
    const canonicalUrl = new URL(currentPath, SITE_URL).toString()
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

    document.title = pageTitle

    upsertMeta('meta[name="description"]', "name", "description", description)
    upsertMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow")

    upsertMeta('meta[property="og:type"]', "property", "og:type", "website")
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME)
    upsertMeta('meta[property="og:title"]', "property", "og:title", pageTitle)
    upsertMeta('meta[property="og:description"]', "property", "og:description", description)
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl)
    upsertMeta('meta[property="og:image"]', "property", "og:image", image)

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image")
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle)
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description)
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image)

    upsertLink('link[rel="canonical"]', "canonical", canonicalUrl)

    const scriptId = "seo-structured-data"
    let jsonLd = document.getElementById(scriptId)
    if (structuredData) {
      if (!jsonLd) {
        jsonLd = document.createElement("script")
        jsonLd.id = scriptId
        jsonLd.type = "application/ld+json"
        document.head.appendChild(jsonLd)
      }
      jsonLd.textContent = JSON.stringify(structuredData)
    } else if (jsonLd) {
      jsonLd.remove()
    }
  }, [title, description, path, image, noindex, structuredData, location.pathname])

  return null
}

export default Seo
