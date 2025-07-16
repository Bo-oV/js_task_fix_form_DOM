'use strict';

const form = document.querySelectorAll('form');

const iputs1 = form[0].querySelectorAll('input');
const iputs2 = form[1].querySelectorAll('input');

const inputs = [...iputs1, ...iputs2];

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  input.placeholder =
    input.name.charAt(0).toLocaleUpperCase() + input.name.slice(1);
});
