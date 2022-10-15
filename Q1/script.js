let controlador = 0;
let value;
let quadrados;

  while (value != 0){
    value = prompt(`Informe o ${controlador+1} valor: `);
    controlador ++;
    quadrados = value * value;
    console.log(quadrados);
  }

