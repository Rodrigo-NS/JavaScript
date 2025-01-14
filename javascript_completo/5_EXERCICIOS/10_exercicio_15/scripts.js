let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }

}

if(divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}

//-----------------------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
        semPares.push(arr[i]); // Adiciona ao array semPares
  }
}

console.log(semPares); // Resultado: [1, 3, 5, 7]