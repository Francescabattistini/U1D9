/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
console.log(area);
const luneghezza1 = 5;
const lunghezza2 = 10;
const areaRettangolo = area(luneghezza1, lunghezza2);
console.log("questa è l'area del rettangolo:", areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(4, 4)); // output 24
console.log(crazySum(5, 4)); // output 9
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(X) {
  let differenza = X - 19;
  if (differenza < 0) {
    differenza = -differenza;
  }
  if (X > 19) {
    return differenza * 3;
  } else return differenza;
}

console.log(crazyDiff(19)); // Output: 0
console.log(crazyDiff(5)); // Output: 14
console.log(crazyDiff(20)); // Output: 3

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(Y) {
  return (Y >= 20 && Y <= 100) || Y === 400;
}
console.log(boundary(30));
console.log(boundary(100));
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(IPA) {
  if (IPA.startsWith("EPICODE")) {
    return IPA; // Se la stringa inizia già con "EPICODE", ritorna la stringa originale
  } else {
    return "EPICODE " + IPA; //  aggiunge "EPICODE" all'inizio della stringa fornita
  }
}
console.log(epify("amo i gatti"));
console.log(epify("EPICODE tutte cose"));
console.log(epify("ipa"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
  if (number <= 0) {
    return false; // Se il numero non è  inferiore o uguale a 0 allora è false.
  }
  if (number % 3 === 0 || number % 7 === 0) {
    // se il numero è divisibile per 7 o 3 è True.
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(-1));
console.log(check3and7(21));
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(ABCDEF) {
  let reversedStr = ""; // Inizializziamo una stringa vuota per contenere la stringa invertita

  // Iteriamo attraverso la stringa dall'ultimo carattere al primo e aggiungiamo ogni carattere alla nuova stringa
  for (let i = ABCDEF.length - 1; i >= 0; i--) {
    reversedStr += ABCDEF[i];
  }

  return reversedStr; // Ritorniamo la stringa invertita
}

console.log(reverseString("Epicode"));
console.log(reverseString("casa"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(str) {
  let parole = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join(" ");
}
console.log(parole);
console.log(upperFirst("ciao amici"));
console.log(upperFirst("voglio un gelato"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
