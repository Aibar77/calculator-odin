// define variables
const calculator = document.querySelector('.calculator')
const prevDisplay = document.querySelector('[data-prev]')
const currenDisplay = document.querySelector('[data-current]')
const keys = document.querySelector('.buttons')
// const clearBtn = document.querySelector('[data-clear]')
keys.addEventListener('click', e => {
  if (e.target.matches('input[type="button"]')) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
      console.log('number key!');
      
    }
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      console.log('operator key!');
      
    }
    if (action === 'decimal') {
      console.log('decimal key!');
      
    }
    if (action === 'clear') {
      console.log('clear key');
      
    }
    if (action === 'delete') {
      console.log('delete key');
      
    }
    if (action === 'calculate') {
      console.log('equal key!');
      
    }
  }
})


