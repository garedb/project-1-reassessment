document.addEventListener('DOMContentLoaded', function() {

let Ans = document.getElementById('answer')
let Num = document.getElementById('input')
let Sub = document.getElementById('submit')

addEventListener('submit', function(event) {
    event.preventDefault();
    let convertedTemp = (Num.value - 32) * (5 / 9);
    Ans.innerHTML = convertedTemp.toFixed(2)+ 'C';
  });
});
