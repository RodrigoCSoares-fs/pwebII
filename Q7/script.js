let base, altura, perimetro=0, area=0;

base = prompt('Informe a base');
altura = prompt('Informe a a altura');

area = base * altura;
perimetro = ((2*base) + (2*altura));

console.log (`AREA DO RETANGULO: ${area}`)
console.log (`PERIMETRO DO RETANGULO: ${perimetro}`);