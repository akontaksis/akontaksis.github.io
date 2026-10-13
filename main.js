const translations = {
    en: {
        "meta.title": "Sakis Kontaksis",
        "meta.description": "Sakis Kontaksis — web developer.",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "nav.menu": "Menu",
        "hero.eyebrow": "Hi there, I'm",
        "hero.subtitle": 'a <span class="highlight">pro</span>grammer.',
        "hero.cta": "Get in touch",
        "hero.scroll": "Scroll to about section",
        "about.alt": "Portrait of Sakis Kontaksis",
        "about.title": "Hello.",
        "about.text": "I am a web dev.",
        "skills.title": "My Skills",
        "skills.code": "Coding in HTML and CSS is like crafting the web’s foundation and adding its beauty. With every tag and style, you bring ideas to life, shaping websites that are both functional and visually stunning. It’s a creative journey where logic meets design, and the possibilities are endless.",
        "skills.skiTitle": "Skiing",
        "skills.ski": "Skiing is pure joy for winter lovers, combining the thrill of gliding through fresh snow with the beauty of the mountains. Whether tackling challenging slopes or enjoying peaceful trails, it’s an exhilarating escape that connects you to nature and adventure.",
        "show.eyebrow": "What I bring",
        "show.title1": "Code that",
        "show.title2": "moves.",
        "show.lead": "I combine modern web development, smooth animations and AI-powered workflows to ship fast, polished experiences.",
        "show.f1Title": "AI-powered development",
        "show.f1Text": "I build with AI coding agents and LLMs: from prompt engineering to automated workflows, I ship features faster without cutting corners.",
        "show.f2Title": "Animation & motion",
        "show.f2Text": "Keyframes, transitions, scroll effects and micro-interactions that make interfaces feel alive, like the ones on this page.",
        "show.f3Title": "Modern, responsive web",
        "show.f3Text": "Clean, accessible code that looks sharp on every screen and loads fast.",
        "contact.title": "Let's work together",
        "contact.text": "Have a project in mind or just want to say hi? My inbox is always open.",
        "contact.cta": "Contact me"
    },
    el: {
        "meta.title": "Sakis Kontaksis",
        "meta.description": "Sakis Kontaksis — web developer.",
        "nav.about": "Σχετικά",
        "nav.skills": "Δεξιότητες",
        "nav.contact": "Επικοινωνία",
        "nav.menu": "Μενού",
        "hero.eyebrow": "Γεια! Είμαι",
        "hero.subtitle": '<span class="highlight">Προ</span>γραμματίζω.',
        "hero.cta": "Ας μιλήσουμε",
        "hero.scroll": "Μετάβαση στην ενότητα Σχετικά",
        "about.alt": "Φωτογραφία του Sakis Kontaksis",
        "about.title": "Γεια σας.",
        "about.text": "Είμαι web developer.",
        "skills.title": "Οι δεξιότητές μου",
        "skills.code": "Ο κώδικας σε HTML και CSS είναι σαν να χτίζεις τα θεμέλια του διαδικτύου και να του δίνεις ομορφιά. Με κάθε tag και κάθε style δίνεις ζωή σε ιδέες, δημιουργώντας ιστοσελίδες που είναι ταυτόχρονα λειτουργικές και εντυπωσιακές. Είναι ένα δημιουργικό ταξίδι όπου η λογική συναντά τον σχεδιασμό και οι δυνατότητες είναι ατελείωτες.",
        "skills.skiTitle": "Σκι",
        "skills.ski": "Το σκι είναι καθαρή χαρά για όσους αγαπούν τον χειμώνα, καθώς συνδυάζει τη συγκίνηση της ολίσθησης στο φρέσκο χιόνι με την ομορφιά του βουνού. Είτε σε απαιτητικές πίστες είτε σε ήρεμες διαδρομές, είναι μια συναρπαστική απόδραση που σε φέρνει κοντά στη φύση και την περιπέτεια.",
        "show.eyebrow": "Τι προσφέρω",
        "show.title1": "Κώδικας που",
        "show.title2": "κινείται.",
        "show.lead": "Συνδυάζω σύγχρονο web development, ομαλά animations και ροές εργασίας με AI για να παραδίδω γρήγορα, προσεγμένα αποτελέσματα.",
        "show.f1Title": "Ανάπτυξη με AI",
        "show.f1Text": "Χτίζω με AI coding agents και LLMs: από prompt engineering μέχρι αυτοματοποιημένες ροές εργασίας, παραδίδω features πιο γρήγορα χωρίς εκπτώσεις στην ποιότητα.",
        "show.f2Title": "Animation & κίνηση",
        "show.f2Text": "Keyframes, transitions, εφέ στο scroll και micro-interactions που ζωντανεύουν κάθε interface, όπως αυτά σε αυτή τη σελίδα.",
        "show.f3Title": "Σύγχρονο, responsive web",
        "show.f3Text": "Καθαρός, προσβάσιμος κώδικας που δείχνει άψογα σε κάθε οθόνη και φορτώνει γρήγορα.",
        "contact.title": "Ας συνεργαστούμε",
        "contact.text": "Έχετε κάποιο project στο μυαλό σας ή θέλετε απλώς να πείτε ένα γεια; Το inbox μου είναι πάντα ανοιχτό.",
        "contact.cta": "Επικοινωνήστε μαζί μου"
    }
};

const toggle = document.getElementById("lang-toggle");

function setLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t["meta.title"];
    document.querySelector('meta[name="description"]').content = t["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.scrambleId = (el.scrambleId || 0) + 1; // cancel any running scramble
        el.textContent = t[el.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        el.innerHTML = t[el.dataset.i18nHtml];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        el.alt = t[el.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        el.setAttribute("aria-label", t[el.dataset.i18nAria]);
    });

    // The button offers the other language
    toggle.textContent = lang === "en" ? "ΕΛ" : "EN";
    toggle.setAttribute("aria-label", lang === "en" ? "Ελληνικά" : "English");

    try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initialLanguage() {
    try {
        const saved = localStorage.getItem("lang");
        if (saved && translations[saved]) return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().startsWith("el") ? "el" : "en";
}

toggle.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "en" ? "el" : "en");
});

setLanguage(initialLanguage());

document.getElementById("year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Scroll reveal
document.documentElement.classList.add("js");
document.querySelectorAll(".features .reveal, .cards .reveal").forEach((el, i) => {
    el.style.setProperty("--delay", `${(i % 3) * 0.12}s`);
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .beam").forEach(el => revealObserver.observe(el));

// Section titles "decode" from random glyphs when they scroll into view
const GLYPHS = "!<>-_\\/[]{}=+*^?#01ΔΣΩλ";

function scramble(el) {
    const id = el.scrambleId = (el.scrambleId || 0) + 1;
    const final = el.textContent;
    const duration = 40;
    let frame = 0;

    function tick() {
        if (el.scrambleId !== id) return;
        let out = "";
        for (let i = 0; i < final.length; i++) {
            const settleAt = (i / final.length) * duration * 0.7 + 8;
            out += frame >= settleAt || final[i] === " "
                ? final[i]
                : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        el.textContent = out;
        if (frame++ < duration) requestAnimationFrame(tick);
        else el.textContent = final;
    }
    tick();
}

if (!reducedMotion) {
    const scrambleObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scramble(entry.target);
                scrambleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    document.querySelectorAll(".section-title, .showcase-title .gradient-text")
        .forEach(el => scrambleObserver.observe(el));
}

// Mobile menu
const header = document.querySelector(".nav");
const menuToggle = document.getElementById("menu-toggle");

function setMenu(open) {
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => setMenu(!header.classList.contains("menu-open")));
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
});
window.matchMedia("(min-width: 720px)").addEventListener("change", e => {
    if (e.matches) setMenu(false);
});

// Active nav link follows the section in view
const navLinks = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => sectionObserver.observe(s));

// Scroll-linked effects: progress bar, nav state, hero parallax, showcase opening
const progressBar = document.querySelector(".scroll-progress");
const nav = document.querySelector(".nav");
const hero = document.getElementById("hero");
const heroContent = hero.querySelector(".hero-content");
const showcase = document.getElementById("showcase");
const clamp01 = v => Math.min(1, Math.max(0, v));
let ticking = false;

function onScroll() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;

    progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("is-scrolled", y > vh * 0.6);

    if (!reducedMotion) {
        if (y < vh * 1.2) {
            const p = clamp01(y / (vh * 0.8));
            heroContent.style.transform = `translateY(${y * 0.35}px) scale(${1 - p * 0.08})`;
            heroContent.style.opacity = 1 - p;
            heroContent.style.filter = `blur(${p * 8}px)`;
            hero.style.backgroundPosition = `center calc(50% + ${y * 0.4}px)`;
        }

        const r = showcase.getBoundingClientRect();
        const entering = clamp01((r.top - vh * 0.15) / (vh * 0.7));
        const leaving = clamp01((vh * 0.85 - r.bottom) / (vh * 0.7));
        showcase.style.setProperty("--open", Math.max(entering, leaving).toFixed(3));
    }
    ticking = false;
}

window.addEventListener("scroll", () => {
    if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
    }
}, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// Feature cards: 3D tilt + spotlight that follows the cursor
if (!reducedMotion && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".feature").forEach(card => {
        card.addEventListener("transitionend", e => {
            if (e.propertyName === "opacity") card.classList.add("is-settled");
        });
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            card.style.setProperty("--mx", `${x * 100}%`);
            card.style.setProperty("--my", `${y * 100}%`);
            card.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

// Terminal: types out an AI coding session on a loop
const terminal = document.getElementById("terminal");
const script = [
    { cls: "t-prompt", text: "$ ", type: false, inline: true },
    { cls: "t-cmd", text: 'ai "Build an animated hero section with parallax"', type: true },
    { cls: "t-step", text: "◆ Analyzing layout & design tokens..." },
    { cls: "t-step", text: "◆ Generating components..." },
    { cls: "t-file", text: "  + hero.html" },
    { cls: "t-file", text: "  + hero.css    ", note: "// keyframes: float, fade-up" },
    { cls: "t-file", text: "  + hero.js     ", note: "// IntersectionObserver, parallax" },
    { cls: "t-step", text: "◆ Running accessibility & performance checks..." },
    { cls: "t-ok", text: "✓ Responsive · Accessible · 60fps" },
    { cls: "t-ok", text: "✓ Ready to ship." }
];

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function addSpan(cls, text) {
    const span = document.createElement("span");
    span.className = cls;
    span.textContent = text;
    terminal.appendChild(span);
    return span;
}

function renderStatic() {
    terminal.textContent = "";
    script.forEach(line => {
        addSpan(line.cls, line.text);
        if (line.note) addSpan("t-note", line.note);
        if (!line.inline) terminal.appendChild(document.createTextNode("\n"));
    });
}

async function runTerminal() {
    while (true) {
        terminal.textContent = "";
        for (const line of script) {
            if (line.type) {
                const span = addSpan(line.cls, "");
                for (const char of line.text) {
                    span.textContent += char;
                    await wait(35 + Math.random() * 45);
                }
                await wait(500);
            } else {
                addSpan(line.cls, line.text);
                if (line.note) addSpan("t-note", line.note);
                await wait(line.inline ? 300 : 420);
            }
            if (!line.inline) terminal.appendChild(document.createTextNode("\n"));
        }
        await wait(4000);
    }
}

if (reducedMotion) {
    renderStatic();
} else {
    const terminalObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            terminalObserver.disconnect();
            runTerminal();
        }
    }, { threshold: 0.3 });
    terminalObserver.observe(terminal.closest(".terminal"));
}
