import { setTheUsername } from 'whatwg-url';
import menu from './menu.json';
import itemsTemplate from './templates/menu-cards.hbs';
const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);
menuRef.innerHTML = markup;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const  switchTheme = document.querySelector('#theme-switch-toggle');
const theme = localStorage.getItem('theme');
if(theme === Theme.DARK){
  document.body.classList.add(Theme.DARK);
  switchTheme.checked = true;
}

function setTheme(themeToSet, themeToReset) {
  document.body.classList.remove(themeToReset);
 document.body.classList.add(themeToSet);
}

switchTheme.addEventListener('change', function() 
{
  if(switchTheme.checked){
    setTheme('dark-theme', 'light-theme');
    setLocalStorage(Theme.DARK);
  }
    else {
      setTheme( 'light-theme', 'dark-theme');
      setLocalStorage(Theme.LIGHT);
  }
  }, false);

function setLocalStorage(themeToSave) {
  localStorage.setItem('theme', themeToSave);
}