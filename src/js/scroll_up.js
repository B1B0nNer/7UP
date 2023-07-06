function scrollTop() {
  const scrollTop = document.querySelector(".scrollup");
  if (window.scrollY >= 200)
    scrollTop.classList.add("scrollup-show");
  else
    scrollTop.classList.remove("scrollup-show");
}

scrollTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});