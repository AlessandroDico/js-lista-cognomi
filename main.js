/*
Creare un array contenente dei cognomi in ordine casuale.
Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).
*/

// CREO UN ARRAY CON DEI COGNOMI
var surname_list = ['rossi', 'verdi', 'brown', 'brambilla', 'brambillafumagalli', 'gialli', 'arancioni'];
// console.log(surname_list);

// CHIEDO COGNOME ALL'UTENTE QUINDI PROMPT
var user_surname = prompt('Inserisci il tuo cognome');
// console.log(user_surname);

// INSERISCO IL COGNOME NELL'ARRAY QUINDI PUSH
surname_list.push(user_surname);

// STAMPO LA LISTA DEI COGNOMI IN ORDINE ALFABETICO
console.log(surname_list.sort());


// COMUNICO LA POSIZIONE DEL COGNOME IN ORDINE ALFABETICO
var user_surname_position = surname_list.indexOf(user_surname);
console.log('il tuo cognome è alla posizione ' + user_surname_position);
