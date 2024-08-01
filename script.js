
/* SCALETTA

1- Recupero gli elementi dal DOM
2- Gestisco gli eventi
3- Stampo in console

*/

// ! Fase preparatoria

// Di base il prezzp non avrà sconto
let result = null

// Preparo il suffisso dei km
const kmSuffix = 'km'
// Preparo il suffisso dell'età
const ageSuffix = 'anni'
//Preparo il suffiso 'euro'
const priceSuffix = '€'

const fullName = document.getElementById('fullname')
const kmField = document.getElementById('kmresult')
const ageField = document.getElementById('ageresult')
const generate = document.getElementById('generate')
const ticketElement = document.getElementById('ticket');
const reset = document.getElementById('reset')



// ! Fase gestione eventi

generate.addEventListener('click', function (e) {
    e.preventDefault();
    // Recupero il valore degli input
    const kmValue = kmField.value
    const ageValue = ageField.value
    const fullNameValue = fullName.value

// ! Fase lavorazione dati

// Calcolo il prezzo del biglietto in base ai km
const ticketPrice = kmValue*0.21;
console.log(ticketPrice + ' ' + priceSuffix)

ticketPriceHuman = ticketPrice.toFixed(2)

// Calcolo lo sconto in base all'età
result = ticketPrice

if(ageValue === '-18'){
    result = ticketPrice - (ticketPrice / 100*20) //moltiplico per 0.8
    console.log(result)
}   else if(ageValue === 'o65'){
    result = ticketPrice - (ticketPrice / 100*40) //moltiplico per 0.6
    console.log(result)
}   

// Imposto 2 cifre decimali per il risultato finale
resultHuman = result.toFixed(2);
console.log(resultHuman)    


// ! Fase produzione output

// Stabilisco il messaggio relativo ai chilometri da mostrare nel DOM
const kmresult = `${kmValue} ${kmSuffix}`
kmresult.innerText = kmresult;

// Stabilisco il messaggio relativo all'età da mostrare nel DOM
const ageresult = `${ageValue} ${ageSuffix}`
ageresult.innerText = ageresult;

// Stabilisco il messaggio del prezzo finale da mostrare nel DOM
const message = `Il costo finale del tuo biglietto è di ${resultHuman} ${priceSuffix}`
ticketElement.innerText = message;

    // Stampo in pagina
    console.log(fullNameValue)
    console.log(kmValue)
    console.log(ageValue)
    console.log(ticketElement)

})







