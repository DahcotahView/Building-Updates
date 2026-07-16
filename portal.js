/* Dahcotah View Resident Portal — shared translation logic */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    autoDisplay: false,
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, "google_translate_element");
}
function setLanguage(code, btn) {
  const expire = "Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "googtrans=; path=/; expires=" + expire;
  document.cookie = "googtrans=; path=/; domain=" + location.hostname + "; expires=" + expire;
  document.cookie = "googtrans=; path=/; domain=." + location.hostname + "; expires=" + expire;
  if (code !== "en") document.cookie = "googtrans=/en/" + code + "; path=/";
  location.reload();
}
(function markActiveLanguage() {
  function run() {
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    const active = match ? match[1] : "en";
    document.querySelectorAll(".lang-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === active);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
