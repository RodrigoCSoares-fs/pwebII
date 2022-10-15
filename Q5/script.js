let a = parseInt(prompt('Informe um valor '));
let b = parseInt(prompt('Informe outro valor: '));

if(a >= 1 && b >= 1) {
  function euclides(a, b) {
    while(b != 0){
        var r = a % b;
        a = b;
        b = r;
    }
    console.log(a);
  }
} else {
  console.log('Informe um valor inteiro positivo!');
}

euclides(a, b);