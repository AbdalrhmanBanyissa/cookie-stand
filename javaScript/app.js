'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

const parentElement = document.getElementById( 'salmon' );

let div = document.createElement( 'div' );

parentElement.appendChild( div );

let table = document.createElement( 'table' );

div.appendChild( table );

let headder = function(){
  let tRow = document.createElement( 'tr' );
  table.appendChild( tRow );

  let tHeader = document.createElement( 'th' );
  tHeader.textContent = ' Location ';
  tRow.appendChild( tHeader );

  let i = 0;
  for ( i = 0; i < hours.length ; i++ ){
    let tHead = document.createElement( 'th' );
    tHead.textContent = hours[i];
    tRow.appendChild( tHead );
  }
  if ( i === hours.length ){
    let tHeader2 = document.createElement( 'th' );
    tHeader2.textContent = 'Daily Location Total';
    tRow.appendChild( tHeader2 );
  }
};

let locations = [];

function Location ( location, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer ) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.numberOfCookies = [];
  this.total = 0;
  locations.push( this );
  Location.prototype.getRandomIntInclusive = function () {
    for ( let i = 0; i < hours.length; i++ ) {
      this.numberOfCookies.push( Math.ceil( getRandomIntInclusive( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer ) );
      this.total += this.numberOfCookies[i];
    }
  };

  Location.prototype.render = function() {

    let tRow = document.createElement( 'tr' );
    table.appendChild( tRow );

    let tColumn = document.createElement( 'td' );
    tColumn.textContent = this.location;
    tRow.appendChild( tColumn );

    for ( let i = 0; i < hours.length; i++ ) {
      let tColumn = document.createElement( 'td' );
      tColumn.textContent = ` ${this.numberOfCookies[i]}`;
      tRow.appendChild( tColumn );
    }
    let tColumn2 = document.createElement( 'td' );
    tRow.appendChild( tColumn2 );
    tColumn2.textContent = ` ${this.total} `;
  };
  this.getRandomIntInclusive();
  this.render();
}

let footer = function(){
  let tRow = document.createElement( 'tr' );
  table.appendChild( tRow );

  let tFooter = document.createElement( 'th' );
  tFooter.textContent = ' Total ';
  tRow.appendChild( tFooter );
  for ( let i = 2 ; i <= 16 ; i++ ){

    let columnElement = document.querySelectorAll( 'tr td:nth-child('+i+')' );
    let sumOfColumn=0;
    for( let j = 0 ; j < columnElement.length ; j++ ){
      sumOfColumn+=parseInt( columnElement[j].textContent );

    }

    tFooter=document.createElement( 'td' );
    tFooter.textContent=sumOfColumn;
    tRow.appendChild( tFooter );
  }
};

headder();

let seattle = new Location( 'Seattle',23,65,6.3 );


let Tokyo = new Location( 'Tokyo',3,24,1.2 );

let Dubai = new Location( 'Dubai',11,38,3.7 );

let Paris = new Location( 'Paris',20,38,2.3 );

let Lima = new Location( 'Lima',2,16,4.6 );


footer( );



//Form
let newStore = document.getElementById( 'form' );

newStore.addEventListener( 'submit', submitter );

function submitter( event ) {


  event.preventDefault();

  let city = event.target.location.value;
  let minHourlyCustomers2 = event.target.minHourlyCustomers.value;
  let maxHourlyCustomers2 = event.target.maxHourlyCustomers.value;
  let averageCookiesPerCustomer2 = event.target.averageCookiesPerCustomer.value;

  console.log( city, minHourlyCustomers2, maxHourlyCustomers2, averageCookiesPerCustomer2 );
  table.deleteRow( locations.length + 1 );


  let additonalStore = new Location( city, minHourlyCustomers2, maxHourlyCustomers2, averageCookiesPerCustomer2 );
  footer();

}
