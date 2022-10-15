let controlador = 0;
let value;
let soma = 0;

value = prompt('Informe um valor para soma dos n primeiros inteiros positivos');

if(value>0){
  while (controlador <= value){
    soma = soma + controlador;
    controlador++;
  } 
  console.log(soma);
}else{
  console.log('O numero deve ser inteiro e positivo!');
}

 

