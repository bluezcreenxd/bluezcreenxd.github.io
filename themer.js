function setAtr(name, value) {
  document.documentElement.style.setProperty(name, value);
}

//set dark as default since the default theme is actually hardcoded previously therefore item 'theme' is null
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'dark');
}

if (!localStorage.getItem('font')) {
  localStorage.setItem('theme', 'pixel');
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    lightMode();
  } else {
    darkMode();
  }
}

//lightcon: icon 4 light mode
//darkcon: vice versa
function darkMode() {
  setAtr('--bg', '#212121');
  setAtr('--prim-text', '#EEEEEE');

  const lightcon = document.getElementById('light');
  const darkcon = document.getElementById('dark');
  if (lightcon) lightcon.style.display = 'none';
  if (darkcon) darkcon.style.display = 'inline-block';

  const themeMoon = document.getElementById('toggle-moon');
  const themeSun = document.getElementById('toggle-sun');
  if (themeMoon) themeMoon.style.display = 'none';
  if (themeSun) themeSun.style.display = 'inline-block';

  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  setAtr('--bg', '#CCCCCC');
  setAtr('--prim-text', '#000000');

  const lightcon = document.getElementById('light');
  const darkcon = document.getElementById('dark');
  if (lightcon) lightcon.style.display = 'inline-block';
  if (darkcon) darkcon.style.display = 'none';

  const themeMoon = document.getElementById('toggle-moon');
  const themeSun = document.getElementById('toggle-sun');
  if (themeMoon) themeMoon.style.display = 'inline-block';
  if (themeSun) themeSun.style.display = 'none';

  localStorage.setItem('theme', 'light');
}

function toggleFont() {
  if (localStorage.getItem('font') === 'pixel') {
    monoFont();
  } else {
    pixelFont();
  }
}

function monoFont() {
  setAtr('--title-font', 'jbm');
  setAtr('--body-font', 'jbm');
  document.documentElement.style.fontSize = '75%';
  localStorage.setItem('font', 'mono')
}

function pixelFont() {
  setAtr('--title-font', 'mondwest');
  setAtr('--body-font', 'neuebit');
  document.documentElement.style.fontSize = '100%';
  localStorage.setItem('font', 'pixel')
}


// save theme between pages
if (localStorage.getItem('theme') === 'dark') darkMode();
else lightMode();

if (localStorage.getItem('font') === 'pixel') pixelFont();
else monoFont();