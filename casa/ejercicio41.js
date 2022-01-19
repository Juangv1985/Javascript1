//Array N elementos numeros enteros
//Que se generen aleatoriamente
// Contar numeros > 0
// El promedio de los positivos
//Y promedio del total

function randomsNumbers(n) {
  let num = [];
  for (let i = 0; i < n; i++) {
    num[i] = Math.floor(Math.random() * n);
  }

  for (let j = 0; j < n; j++) {
    if (num[j] > 0) {
      count++;
    }
  }
  return num;
}

console.log(randomsNumbers(5));
