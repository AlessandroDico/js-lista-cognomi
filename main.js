/*
Creare un array contenente dei cognomi in ordine casuale.
Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).
*/



/*
// PRIMA SOLUZIONE


// CREO UN ARRAY CON DEI COGNOMI
var surname_list = ['rossi', 'verdi', 'brown', 'brambilla', 'brambillafumagalli', 'gialli', 'arancioni'];
// console.log(surname_list);

// CHIEDO COGNOME ALL'UTENTE QUINDI PROMPT
var user_surname = prompt('Inserisci il tuo cognome');
// console.log(user_surname);
var lower_user_surname = user_surname.toLowerCase();
// con questo comando obligo il cognome dell utente ad essere tutto minuscolo in modo da non avere problemi per l'ordine alfabetico
console.log(lower_user_surname);

// INSERISCO IL COGNOME NELL'ARRAY QUINDI PUSH
surname_list.push(lower_user_surname);

// STAMPO LA LISTA DEI COGNOMI IN ORDINE ALFABETICO
console.log(surname_list.sort());


// COMUNICO LA POSIZIONE DEL COGNOME IN ORDINE ALFABETICO
var user_surname_position = surname_list.indexOf(lower_user_surname);
console.log('il tuo cognome è alla posizione ' + user_surname_position);


// FINE PRIMA SOLUZIONE
*/




// SECONDA SOLUZIONE

// CREO UN ARRAY CON DEI COGNOMI
var surname_list = ['Rossi', 'Verdi', 'Brown', 'Brambilla', 'Brambillafumagalli', 'Gialli', 'Arancioni'];

// DICHIARO UNA VAR PER POTER RENDERE TUTTI I CARATTERI DELL'ARRAY MINUSCOLI
var list_lower_case;

var lower_surname_list = [];
// CHIEDO IL COGNOME ALL'UTENTE
var user_surname = prompt('Inserisci il tuo cognome');

// RENDO IL COGNOME DELL'UTENTE MINUSCOLO PER NON AVERE PROBLEMI CON L'ORDINE ALFABETICO
var user_surname_lower = user_surname.toLowerCase();
// console.log(user_surname_lower);

// PUSHO IL COGNOME MINUSCOLO DENTRO L'ARRAY
surname_list.push(user_surname_lower);

// console.log(surname_list);

for (var i = 0; i < surname_list.length; i++) {
    list_lower_case = surname_list[i].toLowerCase();
    // console.log(list_lower_case);
    lower_surname_list.push(list_lower_case);
    // console.log(lower_surname_list);
}

var list_alphabetical_order = lower_surname_list.sort();
console.log(list_alphabetical_order);

// DICHIARO LA POSIZIONE DEL COGNOME DELL'UTENTE

var user_surname_position = list_alphabetical_order.indexOf(user_surname_lower);
console.log('il tuo cognome è alla posizione ' + user_surname_position);











/*_________________*/
