// Reponsive nav bar 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})




// Video autoplay & hide
( function( d ) {
  'use strict';

  var str = d.querySelectorAll( '.starter' ), 
      pyr = d.querySelectorAll( '.player' ),
      c, i;

  for ( c = 0; c < str.length; c ++ ) {
     str[c].classList.remove( 'hide' );
     str[c].addEventListener( 'click', startVideo( c ), false );
   }

function startVideo( c ) {
  str[ c ].onclick=function(){
     for ( i = 0; i < pyr.length; i ++ ) {
           pyr[ i ].src=pyr[ i ].src.replace( '?autoplay=1', '' );
           str[ i ].classList.remove( 'hide' );
         }
           pyr[ c ].src=pyr[ c ].src + '?autoplay=1';
           str[ c ].classList.add( 'hide' );
     };
   }

}( document ));
