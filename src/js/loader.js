const loader = document.querySelector('.loader');

loader.classList.add('hidden');

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}