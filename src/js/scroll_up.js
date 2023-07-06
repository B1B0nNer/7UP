function scrollTop() {
  const scrollTopBtn = document.querySelector(".scrollup");
  if (window.scrollY >= 200)
    scrollTopBtn.classList.add("scrollup-show");
  else
    scrollTopBtn.classList.remove("scrollup-show");
}

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});