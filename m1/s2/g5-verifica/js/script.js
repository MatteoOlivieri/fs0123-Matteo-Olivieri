


 function aggiungiTasto(elemento) {

         let simbolo = elemento.getAttribute('data-simbolo');  
                 let display = document.querySelector('#display');

          display.value += simbolo;
}






          function totale() {

    let display = document.querySelector('#display');
         let risultato = eval(display.value);

             if (isFinite(risultato)) {

        if (risultato % 1 === 0) {
            display.value = risultato;
        } else {
            display.value = risultato,toFixed(3);
        }
    } else {
               display,value = "Errore: risultato non valido!";
  
    }
}




function canc() {

       document.querySelector("#display").value = '';

}

