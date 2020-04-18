
// init Isotope
let iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// bind sort button click

let filterByGroup = document.querySelector('.filter-by-button-group');
filterByGroup.addEventListener('click', function(event ) {
  if (!matchesSelector( event.target, '.button' ) ) {
    return;
  }
  let tekst = document.querySelector('#inputTekst').value;
  let filterValue = event.target.getAttribute('data-filter') || tekst;

  let zoekresultaat = document.querySelector(".zoekresultaat");
  if (filterValue) {
    if (filterValue === '*') {
    iso.arrange({ filter: filterValue});
  } else {
    iso.arrange({ filter: '.'+filterValue});
  }
    if (iso.filteredItems.length === 0) {
    zoekresultaat.innerHTML="Possible search options are: 'Sculpture', 'Painting', 'Vessel' and 'Engraving'";
  } else {
    zoekresultaat.innerHTML = ' ';
    };
  }
})


// change is-checked class on buttons
let buttonGroups = document.querySelectorAll('.button-group');
for ( let i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  let button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
