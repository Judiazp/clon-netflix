

const btnPreguntasF = document.querySelectorAll( '.preguntas-frecuentes__list--btn' ),
      respuesta     = document.querySelectorAll( '.preguntas-frecuentes__list--respuesta' );

const mostrar = () => {
     for( let i = 0; i < btnPreguntasF.length; i++ ) {    
         btnPreguntasF[i].addEventListener( 'click', () => {
             respuesta[i].classList.toggle('preguntas-frecuentes__list--respuesta-open');
         });
     }
}

mostrar();
