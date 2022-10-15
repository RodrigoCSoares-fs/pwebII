let value = Number(prompt("Digite um número para saber se é primo: "));

const numPrimo = (value) => {
  for (controlador = 2; controlador < value; i++)
    if (value % controlador === 0) {
      return false;
    }
  return value > 1;
};

if (numPrimo(value) == false) {
  console.log(`O número ${value} não é primo`);
} else {
  console.log(`O número ${value} é primo`);
}