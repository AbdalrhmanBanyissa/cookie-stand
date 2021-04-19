'use strict';

let hourlySales = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomIntInclusive ( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

const titleElement = document.getElementById( 'salmonTitle' );

let h1Element = document.createElement( 'h1' );

h1Element.textContent = 'Pat\'s Salmon Cookies: Sales Data' ;

titleElement.appendChild( h1Element );

let tableHeader = ['Location', '6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];

const parentElement = document.getElementById( 'salmon' );

let divElement = document.createElement( 'div' );

parentElement.appendChild( divElement );

let tableElement = document.createElement( 'table' );

divElement.appendChild( tableElement );


let i = 0;
for ( i = 0; i <= hourlySales.length ; i++ ){
  let thElement = document.createElement( 'th' );
  thElement.textContent = tableHeader[i];
  tableElement.appendChild( thElement );
}

if ( i === 15 ) {
  let thElement = document.createElement( 'th' );
  thElement.textContent = 'Daily Location Total';
  tableElement.appendChild( thElement );
}


function Location ( location, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer ) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  Location.prototype.customersPerHour = function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  };

  Location.prototype.render = function() {

    let trElement = document.createElement( 'tr' );
    tableElement.appendChild( trElement );

    let tdElement1 = document.createElement( 'td' );
    tdElement1.textContent = this.location;
    trElement.appendChild( tdElement1 );

    let hourlySalesElement = 0;

    for ( let i = 0; i < hourlySales.length; i++ ) {

      let tdElement = document.createElement( 'td' );

      let cookiesNumber = this.customersPerHour();

      tdElement.textContent = cookiesNumber;

      trElement.appendChild( tdElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let tdElement=document.createElement( 'td' );

        tdElement.textContent= hourlySalesElement;

        trElement.appendChild( tdElement );
      }
    }
  };
}


let loc = new Location( 'Seattle',23,65,6.3 );
loc.render();
console.log( loc );

let Tokyo = new Location( 'Tokyo',3,24,1.2 );
Tokyo.render();
console.log( Tokyo );

let Dubai = new Location( 'Dubai',11,38,3.7 );
Dubai.render();
console.log( Dubai );

let Paris = new Location( 'Paris',20,38,2.3 );
Paris.render();
console.log( Paris );

let Lima = new Location( 'Lima',2,16,4.6 );
Lima.render();
console.log( Lima );


const tfElement = document.createElement( 'tfoot' );
tableElement.appendChild( tfElement );
const trow = document.createElement( 'tr' );
tableElement.appendChild( trow );
let td = document.createElement( 'td' );

let tdFooter = document.createElement( 'td' );
tdFooter.textContent = 'Total';
tableElement.appendChild( tdFooter );


for ( let i = 2 ; i <= 16 ; i++ ){

  let columnElement = document.querySelectorAll( 'tr td:nth-child('+i+')' );
  let sumOfColumn=0;
  for( let j = 0 ; j < columnElement.length ; j++ ){
    sumOfColumn+=parseInt( columnElement[j].textContent );

  }

  td=document.createElement( 'td' );
  td.textContent=sumOfColumn;
  tableElement.appendChild( td );

}
