const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -44px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Feature update: FAQ accordion
const faqList=document.querySelector('[data-faq]');if(faqList){const faqItems=faqList.querySelectorAll('.faq-item');faqItems.forEach(item=>{item.addEventListener('click',()=>{const isOpen=item.classList.contains('is-open');faqItems.forEach(other=>other.classList.remove('is-open'));if(!isOpen)item.classList.add('is-open');});});}
// Feature update: contact form Formspree-ready submit
const contactForm=document.querySelector('[data-contact-form]');if(contactForm){const message=contactForm.querySelector('[data-form-message]');contactForm.addEventListener('submit',async event=>{const action=contactForm.getAttribute('action')||'';if(action.includes('YOUR_FORM_ID')){event.preventDefault();if(message)message.textContent='Form pronto: sostituisci YOUR_FORM_ID con l’endpoint Formspree reale per abilitare l’invio.';return;}event.preventDefault();try{const response=await fetch(action,{method:'POST',body:new FormData(contactForm),headers:{Accept:'application/json'}});if(response.ok){contactForm.reset();if(message)message.textContent='Messaggio inviato correttamente. Ti ricontatterò appena possibile.';}else if(message){message.textContent='Non è stato possibile inviare il messaggio. Puoi contattarmi via WhatsApp.';}}catch(error){if(message)message.textContent='Errore di invio. Puoi contattarmi direttamente via WhatsApp.';}});}
// Feature update: cookie banner
const cookieBanner=document.querySelector('[data-cookie-banner]');const cookieAccept=document.querySelector('[data-cookie-accept]');if(cookieBanner&&cookieAccept){const accepted=localStorage.getItem('antonioTarasCookieAccepted');if(!accepted)cookieBanner.classList.add('is-visible');cookieAccept.addEventListener('click',()=>{localStorage.setItem('antonioTarasCookieAccepted','true');cookieBanner.classList.remove('is-visible');});}
