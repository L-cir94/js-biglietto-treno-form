/*
context: 
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/

/* lista strumenti

- value
- switch / case
- querySelector / getElementById
- addEventListener
- fuction()
- classList

*/

// Chiedo all'utente quanti km deve percorrere e controllo che sia un numero 
const km = Number(prompt('quanti km devi percorrere?'));
//e che sia maggiore di 0
if (isNaN(km) || km <= 0) {
    alert("ERRORE: Il valore deve essere un numero maggiore di 0.");
  }
// Chiedo all'utente l'età e controllo che sia un numero 
const userAge = Number(prompt('quanti anni hai?'));
//e che sia maggiore o uguale a 0
if (isNaN(userAge) || userAge <= 0) {
    alert("ERRORE: Il valore deve essere un numero maggiore di 0.");
  }
console.log(`age = ${userAge} km = ${km}`);
// Calcolo il costo totale del viaggio
const price_per_km = 0.21
let ticket_price = km * price_per_km;
console.log(ticket_price, 'Prezzo intero');
// Calcolo lo sconto per minorenni 20%
// Calcolo lo sconto per over65 40%
let discount = 0
if(userAge < 18) {
  discount = 0.2
} else if(userAge > 65) {
  discount = 0.4
}

const discountAmount = ticket_price * discount
ticket_price = ticket_price - discountAmount
console.log(discount, 'discount');
console.log(discountAmount, 'discount amount');
console.log(ticket_price, 'prezzo scontato');

if (isNaN(ticket_price)) {
  alert('Ciao, devi inserire nei campi dei numeri e non dei testi')
  // mopstro a schermo un messaggio di errore al posto del prezzo
  priceElement.innerHTML = `ERRORE: Il valore deve essere un numero maggiore di 0.`
} 
else{
  // Formatto il prezzo scontato per avere due cifre decimali
  // Mostro all'utente il prezzo finale in pagina
  document.getElementById("total_amount").innerHTML =`€ ${ticket_price.toFixed(2)}`;
}