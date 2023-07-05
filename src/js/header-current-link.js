function addCurrentClassToMenuLink() {
  var path = window.location.pathname;
  var menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    if (path === linkPath) {
      link.classList.add('menu__link--current');
    }
  });
}

addCurrentClassToMenuLink();
