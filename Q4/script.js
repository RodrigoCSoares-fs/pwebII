let value;
let controlador;
let fatorial = 1;

  value = prompt('Informe um inteiro nao negativo');

while (value<0){
  value = prompt('Informe um inteiro nao negativo');
}

  if (value == 1){
    fatorial = 1;
    console.log(`O fatorial de ${value} = ${fatorial}`);
  }

    for(controlador = 2; controlador<=value; controlador++){
      fatorial = fatorial * controlador;
    }
    console.log(`O fatorial de ${value} = ${fatorial}`);
    
 