$(document).ready(function(){

var keys = document.querySelectorAll(" #calculator span")
var operators = ['+','-','x','÷']

for(i = 0; i<keys.length; i++ ) {
  keys[i].onclick = function(e) {
    var screenView = document.querySelector('.screen');
    var screenText = screenView.innerHTML;
    var btnVal = this.innerHTML;

    if(btnVal == 'C') {
      screenView.innerHTML = ""
    }

    else if (btnVal == '=') {
      var equation = screenText;
      equation = equation.replace(/x/g,'*')
                        .replace(/÷/g, '/');

    if(equation)
      screenView.innerHTML = eval(equation);
    }

    else{
      screenView.innerHTML += btnVal;
    }

  }
}


});
