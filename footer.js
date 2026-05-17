document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <style>
        .gh-footer-wrapper {
            margin-top: 60px;
            background-color: #161b22;
            font-family: var(--font-main, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif);
            font-size: 14px;
            width: 100%;
        }
        
        .gh-footer-main {
            max-width: 1280px;
            margin: 0 auto;
            padding: 40px 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 40px;
            box-sizing: border-box; 
        }

        .gh-footer-left {
            max-width: 320px;
            flex-shrink: 0;
        }

        .gh-footer-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 600;
            color: var(--text-color, #c9d1d9);
            margin-bottom: 24px;
            text-decoration: none;
        }

        .gh-footer-logo:hover {
            text-decoration: none;
        }

        .gh-footer-logo svg {
            fill: var(--text-color, #c9d1d9);
        }

        .gh-footer-left-title {
            font-weight: 600;
            color: var(--text-color, #c9d1d9);
            margin-bottom: 8px;
            font-size: 14px;
        }

        .gh-footer-left-desc {
            color: var(--text-muted, #8b949e);
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.5;
        }

        .gh-footer-btn {
            display: inline-block;
            padding: 7px 16px;
            background-color: transparent;
            border: 1px solid var(--border-color, #30363d);
            border-radius: 6px;
            color: var(--text-color, #c9d1d9);
            font-weight: 600;
            text-decoration: none;
            transition: border-color 0.2s, background-color 0.2s;
        }

        .gh-footer-btn:hover {
            background-color: var(--btn-hover, #30363d);
            border-color: var(--text-muted, #8b949e);
            text-decoration: none; 
        }

        .gh-footer-nav {
            display: flex;
            flex-wrap: wrap;
            gap: 80px; 
        }

        .gh-footer-col {
            display: flex;
            flex-direction: column;
        }

        .gh-footer-col-title {
            color: var(--text-muted, #8b949e);
            font-size: 14px;
            margin-bottom: 16px;
        }

        .gh-footer-link {
            color: var(--text-color, #c9d1d9);
            text-decoration: none;
            font-size: 14px;
            margin-bottom: 12px;
            transition: color 0.2s;
        }

        .gh-footer-link:hover {
            color: var(--link-color, #58a6ff);
            text-decoration: underline;
        }

        .gh-footer-bottom-wrapper {
            background-color: #151b23;
            padding: 24px 0; 
            width: 100%;
        }

        .gh-footer-bottom {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 32px; 
            box-sizing: border-box; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            font-size: 12px;
            color: var(--text-muted, #8b949e);
        }

        .gh-footer-bottom-links {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .gh-footer-bottom-links a {
            color: var(--text-muted, #8b949e);
            text-decoration: none;
        }

        .gh-footer-bottom-links a:hover {
            color: var(--link-color, #58a6ff);
            text-decoration: underline;
        }

        .gh-social-icons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .gh-social-icons a {
            color: var(--text-muted, #8b949e);
            display: flex;
            align-items: center;
            transition: color 0.2s;
        }

        .gh-social-icons a:hover {
            color: var(--text-color, #c9d1d9);
        }

        .gh-social-icons svg {
            fill: currentColor;
        }

        @media (max-width: 1012px) {
            .gh-footer-main { flex-direction: column; gap: 40px; }
            .gh-footer-left { max-width: 100%; }
            .gh-footer-nav { gap: 40px; }
            .gh-footer-bottom { flex-direction: column; align-items: flex-start; }
        }
    </style>

    <div class="gh-footer-wrapper">
        <div class="gh-footer-main">
            <div class="gh-footer-left">
                <a href="./" class="gh-footer-logo">
                    <svg height="32" viewBox="0 0 16 16" width="32">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    Volodimir
                </a>
                <div class="gh-footer-left-title">Open to new opportunities</div>
                <div class="gh-footer-left-desc">Software Engineering Student. Focused on backend development, application architecture, and automation.</div>
                <a href="contact.html" class="gh-footer-btn">Get in touch</a>
            </div>

            <div class="gh-footer-nav">
                <div class="gh-footer-col">
                    <div class="gh-footer-col-title">Pages</div>
                    <a href="./" class="gh-footer-link">Home</a>
                    <a href="about.html" class="gh-footer-link">About</a>
                    <a href="projects.html" class="gh-footer-link">Projects</a>
                    <a href="contact.html" class="gh-footer-link">Contact</a>
                </div>

                <div class="gh-footer-col">
                    <div class="gh-footer-col-title">Other</div>
                    <a href="https://github.com/Vovan999222?tab=repositories" target="_blank" class="gh-footer-link">Repositories</a>
                    <a href="https://github.com/Vovan999222?tab=repositories&q=bot" target="_blank" class="gh-footer-link">Telegram Bots</a>
                    <a href="https://github.com/Vovan999222?tab=stars" target="_blank" class="gh-footer-link">Starred Repos</a>
                    <a href="https://github.com/Vovan999222" target="_blank" class="gh-footer-link">My Profile</a>
                </div>
            </div>
        </div>
        
        <div class="gh-footer-bottom-wrapper">
            <div class="gh-footer-bottom">
                <div class="gh-footer-bottom-links">
                    <span>© 2026 volodimir001. Styled with GitHub design system.</span>
                </div>
                
                <div class="gh-social-icons">
                    <a href="https://x.com/vovan_es" target="_blank" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" aria-hidden="true" class="d-block" width="16" height="16"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path></svg></a>
                    <a href="https://www.twitch.tv/vovan_es" target="_blank" aria-label="Twitch"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" aria-hidden="true" class="d-block" width="18" height="18"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" fill="currentColor"></path></svg></a>
                    <a href="https://github.com/Vovan999222" target="_blank" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="20" viewBox="0 0 98 96" width="20" aria-hidden="true" class="d-block"><clipPath id="a"><path d="m0 0h98v96h-98z"></path></clipPath><g clip-path="url(#a)"><path d="m41.4395 69.3848c-12.6329-1.5313-21.5333-10.6231-21.5333-22.3946 0-4.7851 1.7227-9.9531 4.5938-13.3984-1.2441-3.1582-1.0527-9.8574.3828-12.6328 3.8281-.4785 8.9961 1.5312 12.0586 4.3066 3.6367-1.1484 7.4648-1.7226 12.1543-1.7226s8.5176.5742 11.9629 1.6269c2.9668-2.6797 8.2305-4.6894 12.0586-4.2109 1.3398 2.584 1.5312 9.2832.2871 12.5371 3.0625 3.6367 4.6894 8.5176 4.6894 13.4941 0 11.7715-8.9003 20.6719-21.7246 22.2989 3.2539 2.1054 5.4551 6.6992 5.4551 11.9629v9.9531c0 2.8711 2.3926 4.498 5.2637 3.3496 17.3223-6.6035 30.9121-23.9258 30.9121-45.3633 0-27.084-22.0117-49.19139933-49.0957-49.19139957s-48.90430019 22.10739957-48.90430043 49.19139957c-.00000019 21.2461 13.49410043 38.8555 31.67770043 45.459 2.584.957 5.0723-.7656 5.0723-3.3496v-7.6563c-1.3398.5743-3.0625.9571-4.5938.9571-6.3164 0-10.0488-3.4453-12.7285-9.8575-1.0527-2.5839-2.2011-4.1152-4.4023-4.4023-1.1484-.0957-1.5313-.5742-1.5313-1.1484 0-1.1485 1.9141-2.0098 3.8282-2.0098 2.7754 0 5.1679 1.7227 7.6562 5.2637 1.9141 2.7754 3.9238 4.0195 6.3164 4.0195s3.9238-.8613 6.125-3.0625c1.627-1.627 2.8711-3.0625 4.0196-4.0195z"></path></g></svg></a>
                </div>
            </div>
        </div>
    </div>
    `;

    const container = document.querySelector(".container") || document.querySelector(".page-content");
    if (container) {
        container.insertAdjacentHTML("afterend", footerHTML);
    } else {
        document.body.insertAdjacentHTML("beforeend", footerHTML);
    }
});