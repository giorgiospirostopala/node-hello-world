/* Esercizio

-1. Creiamo la prima applicazione con NodeJs e inizializziamola con npm init

-2. Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. 
Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.

-3. Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start

-4. Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. 

-5. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. 
Dovremmo vedere il terminale senza fermare e rilanciare il server.


Bonus
-Proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”.
Buon lavoro!

*/

console.log("Hello Boolean");

// Per stampare ogni indice del comando (intero array process.argv[])
const fraseDaTerminale = process.argv;
//console.log(fraseDaTerminale);

// Per stampare parole custom dopo "Hello"
const helloCustom = process.argv[2];
//console.log(`Hello ${helloCustom}`);

// Per evitare l'undefined se non passo argomenti
const helloCustomFix = process.argv[2] || "Boolean";
console.log(`Hello ${helloCustomFix}`);

// Per passare frasi senza usare le "" / '' (abbr.)
console.log(process.argv.slice(2).join(" ") || "Non hai passato argomenti.");
