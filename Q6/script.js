let x1, x2, x3;

x1 =  prompt('Informe o primeiro valor');
x2 =  prompt('Informe o segundo valor');
x3 =  prompt('Informe o terceiro valor');

if (x1 <= x2 && x2 <= x3)
    {
      console.log(`A ordem crescente: ${x1}, ${x2}, ${x3}`);
    }
  else if (x1 <= x3 && x3 <= x2)
    {
      console.log(`A ordem crescente: ${x1}, ${x3}, ${x2}`);
    }
  else if (x2 <= x1 && x1 <= x3)
    {
      console.log(`A ordem crescente: ${x2}, ${x1}, ${x3}`);
    }
  else if (x2 <= x3 && x3 <= x1) 
    {
      console.log(`A ordem crescente: ${x2}, ${x3}, ${x1}`);
    }
  else if (x3 <= x1 && x1 <= x2) 
    {
      console.log(`A ordem crescente: ${x3}, ${x1}, ${x2}`);
    }
  else /* x3 <= x2 && x2 < x1 */
    {
      console.log(`A ordem crescente: ${x3}, ${x2}, ${x1}`);
    }