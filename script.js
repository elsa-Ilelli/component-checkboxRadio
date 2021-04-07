"use strict";

/*//////////////////////////////*/
/*      COMPONENT MANAGER       */
/*//////////////////////////////*/
const checkboxInput = document.querySelectorAll('input');
const labelInput = document.querySelectorAll('.checkbox'); 
const checkboxControl = document.querySelectorAll('.checkbox__control');

checkboxInput.forEach((input, i) => {
  if(input.hasAttribute('disabled')){
    labelInput[i].style.color = 'var(--disabled)';
    checkboxControl[i].style.borderColor = 'var(--disabled)';
    labelInput[i].style.cursor = 'not-allowed';
  }

  if(input.hasAttribute('disabled') & input.hasAttribute('checked')){
    checkboxControl[i].style.backgroundColor = 'var(--disabled)';
  }
})

/*//////////////////////////////*/
/*          DARK MODE           */
/*//////////////////////////////*/
document.querySelector('[data-switch-dark]').addEventListener('click', function() {
  if(document.documentElement.hasAttribute("dark")){
    document.documentElement.removeAttribute("dark");
    document.getElementById("btn-icon").src="src/img/moon.png";
  } else {
    document.documentElement.setAttribute("dark", "true");
    document.getElementById("btn-icon").src="src/img/sun.png";
  }
});
  
  