function setAtr(name, value) {
  document.documentElement.style.setProperty(name, value);
}

//set dark as default since the default theme is actually hardcoded previously therefore item 'theme' is null
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'dark');
}

//lightcon: icon 4 light mode
//darkcon: vice versa
function darkMode() {
  document.documentElement.className = "theme-dark";

  const lightcon = document.getElementById('light');
  const darkcon = document.getElementById('dark');
  if (lightcon) lightcon.style.display = 'none';
  if (darkcon) darkcon.style.display = 'inline-block';

  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  document.documentElement.className = "theme-light";

  //i have to redefine these variables because they're inconveniently function scoped
  const lightcon = document.getElementById('light');
  const darkcon = document.getElementById('dark');
  if (lightcon) lightcon.style.display = 'inline-block';
  if (darkcon) darkcon.style.display = 'none';

  localStorage.setItem('theme', 'light');
}


// save theme between pages
if (localStorage.getItem('theme') === 'dark') darkMode();
else lightMode();