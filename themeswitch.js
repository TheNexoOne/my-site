let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

  themeButton.onclick = function () {
  page.classList.toggle('white-theme');
  page.classList.toggle('dark-theme');
  localStorage.setItem('theme', page.classList);
}


if (localStorage.getItem('theme') === 'page white-theme') {
  page.classList.remove('dark-theme');
  page.classList.add('white-theme');
} else {
  page.classList.add('dark-theme');
  page.classList.remove('white-theme');
};
