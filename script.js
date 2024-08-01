
/* SCALETTA

1- Recupero gli elementi dal DOM

*/

// ! Fase preparatoria

const kmField = document.querySelector('.age')
const ageField = document.querySelector('.km')
const button = document.getElementById('generate')

// ! Fase gestione eventi

button.addEventListener('click', function (e) {
    e.preventDefault();
    // Recupero il valore degli input
    const kmValue = kmField.value
    const ageValue = ageField.value

    // Stampo in pagina
    console.log(kmValue)
    console.log(ageValue)

})