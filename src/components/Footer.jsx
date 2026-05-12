function Footer() {

    return (
       <footer className="footer">
           <div className="footer-content">
               <p>&copy; 2026 Ristorante Volée. Tutti i diritti riservati. Via Petronio Fancelli, 5 Bologna | Tel: +39 389 2676565</p>
               <div className="footer-social" aria-label="Social links">
                   <a
                       href="https://www.instagram.com/voleebologna/"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Instagram"
                   >
                       <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                           <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />
                       </svg>
                   </a>
                   <a
                       href="https://www.facebook.com/61588277434309/"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Facebook"
                   >
                       <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                           <path d="M13.76 22v-8.2h2.77l.42-3.2h-3.19V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14A22.22 22.22 0 0 0 14.57 4c-2.46 0-4.14 1.5-4.14 4.25v2.35H7.66v3.2h2.77V22Z" />
                       </svg>
                   </a>
               </div>
           </div>
       </footer>
    )
}

export default Footer