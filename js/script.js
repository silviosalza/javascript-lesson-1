document.writeln('Hello World!');
// *writeln aggiungo il corpo tra parentesi dopo tutto il file html

alert('Hello World!')
//*crea pop up alert sulla pagine html

//*chiamo elemento dove voglio scrivere il testo tramite id, ed inserisco testo html con innerHTML='testo che riscrivere dentro'
document.getElementById('main-title').innerHTML='Hello World!';


//*scrive messaggi nella sezione console dell'inspector
console.log('ciao console')

//*variabili: è un contenitore dove inseriamo un dato/informazione
let user = 'Federico';
//*inizializzazione della variabile
document.getElementById('title').innerHTML = user;

const user = 'Federico';
//*const è costante, è una variabile che non potrà mai cambiare il suo valore

var user = 'Federico'
user = 'Giulia'
//*var è possibile cambiarla perchè variabile, come let, ma presenterà svantaggi. Non la utilizzeremo quasi mai.

let anotheruser;
anotherUser = 'Silvio'
//*let permette di inizializzare una variabile senza definirla, si può fare successivamente, la useremo spesso.


let greetin = ' Ciao'
let username = 'Giulia'
let result = greeting + " " + username
//concatenazione di più elementi

const myString = '8'
const number = 8 
//se sommo stringa più numero il risultato è stringa
//se moltiplico stringa '8' * 3 trasforma stringa in numero perchè il * non è interpretabile, è solo per numeri

//trasformo stringa in numero
const myStringasNumber = parseInt(myString)
//trasformo numero in stringa
const myNumberasString = myNumber.toString()

//se voglio sapere che tipo di variabile è si uso type of
console.log(myNumberasString, typeof myNumberasString)

${stampo risultato}
