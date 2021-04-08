"use strict";

/*//////////////////////////////*/
/*      COMPONENT MANAGER       */
/*//////////////////////////////*/

//////////////////////////////////
//CheckBox Manager 

const checkboxInput = document.querySelectorAll('.checkboxInput');
const labelInput = document.querySelectorAll('.checkbox'); 
const checkboxControl = document.querySelectorAll('.checkbox__control');

checkboxInput.forEach((input, i) => {
  if(input.hasAttribute('disabled')){
    labelInput[i].style.color = 'var(--disabled)';
    checkboxControl[i].style.borderColor = 'var(--disabled)';
    labelInput[i].style.cursor = 'not-allowed';
  }

  if(input.hasAttribute('disabled') && input.hasAttribute('checked')){
    checkboxControl[i].style.backgroundColor = 'var(--disabled)';
  }
})

//////////////////////////////////
//Radio Button Manager

const radioInput = document.querySelectorAll('.radioInput');
const radioLabel = document.querySelectorAll('.radio'); 
const radioControl = document.querySelectorAll('.radio__control');

radioInput.forEach((input, i) => {
  if(input.hasAttribute('disabled')){
    radioLabel[i].style.color = 'var(--disabled)';
    radioLabel[i].style.cursor = 'not-allowed';
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
  
  