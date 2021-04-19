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

let tableHeader = ['Location', '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

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
  thElement.textContent = 'Location Totals';
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

// let seattle = {
//   location  : 'Seattle',
//   minHourlyCustomers : 23,
//   maxHourlyCustomers : 65,
//   averageCookiesPerCustomer : 6.3,
//   customersPerHour : function() {
//     return Math.ceil( getRandomIntInclusive (
//       this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
//   },

//   render : function() {

//     const parentElement = document.getElementById( 'salmon' );

//     let h1Element = document.createElement( 'h1' );

//     h1Element.textContent = 'Pat\'s Salmon Cookies: Sales Data' ;

//     parentElement.appendChild( h1Element );

//     let divElement = document.createElement( 'div' );

//     parentElement.appendChild( divElement );

//     let h2Element = document.createElement( 'h2' );

//     h2Element.textContent = this.location ;

//     divElement.appendChild( h2Element );

//     let ulElement = document.createElement( 'ul' );

//     divElement.appendChild( ulElement );

//     let hourlySalesElement = 0;

//     for ( let i = 0; i < hourlySales.length; i++ ) {

//       let liElement = document.createElement( 'li' );

//       let cookiesNumber = this.customersPerHour();

//       liElement.textContent = hourlySales[i] + ': ' + cookiesNumber + ' cookies';

//       ulElement.appendChild( liElement );

//       hourlySalesElement = hourlySalesElement + cookiesNumber;

//       if ( i === 13 ){

//         let liElement=document.createElement( 'li' );

//         liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

//         ulElement.appendChild( liElement );
//       }
//     }
//   },
// };

// let tokyo = {
//   location  : 'Tokyo',
//   hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   minHourlyCustomers : 3,
//   maxHourlyCustomers : 24,
//   averageCookiesPerCustomer : 1.2,
//   customersPerHour : function() {
//     return Math.ceil( getRandomIntInclusive (
//       this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
//   },

//   render : function() {

//     const parentElement = document.getElementById( 'salmon' );

//     let divElement = document.createElement( 'div' );

//     parentElement.appendChild( divElement );

//     let h2Element = document.createElement( 'h2' );

//     h2Element.textContent = this.location ;

//     divElement.appendChild( h2Element );

//     let ulElement = document.createElement( 'ul' );

//     divElement.appendChild( ulElement );

//     let hourlySalesElement = 0;

//     for ( let i = 0; i < this.hourlySales.length; i++ ) {

//       let liElement = document.createElement( 'li' );

//       let cookiesNumber = this.customersPerHour();

//       liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

//       ulElement.appendChild( liElement );

//       hourlySalesElement = hourlySalesElement + cookiesNumber;

//       if ( i === 13 ){

//         let liElement=document.createElement( 'li' );

//         liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

//         ulElement.appendChild( liElement );
//       }
//     }
//   },
// };

// let dubai = {
//   location  : 'Dubai',
//   hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   minHourlyCustomers : 11,
//   maxHourlyCustomers : 38,
//   averageCookiesPerCustomer : 3.7,
//   customersPerHour : function() {
//     return Math.ceil( getRandomIntInclusive (
//       this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
//   },

//   render : function() {

//     const parentElement = document.getElementById( 'salmon' );

//     let divElement = document.createElement( 'div' );

//     parentElement.appendChild( divElement );

//     let h2Element = document.createElement( 'h2' );

//     h2Element.textContent = this.location ;

//     divElement.appendChild( h2Element );

//     let ulElement = document.createElement( 'ul' );

//     divElement.appendChild( ulElement );

//     let hourlySalesElement = 0;

//     for ( let i = 0; i < this.hourlySales.length; i++ ) {

//       let liElement = document.createElement( 'li' );

//       let cookiesNumber = this.customersPerHour();

//       liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

//       ulElement.appendChild( liElement );

//       hourlySalesElement = hourlySalesElement + cookiesNumber;

//       if ( i === 13 ){

//         let liElement=document.createElement( 'li' );

//         liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

//         ulElement.appendChild( liElement );
//       }
//     }
//   },
// };

// let paris = {
//   location  : 'Paris',
//   hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   minHourlyCustomers : 20,
//   maxHourlyCustomers : 38,
//   averageCookiesPerCustomer : 2.3,
//   customersPerHour : function() {
//     return Math.ceil( getRandomIntInclusive (
//       this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
//   },

//   render : function() {

//     const parentElement = document.getElementById( 'salmon' );

//     let divElement = document.createElement( 'div' );

//     parentElement.appendChild( divElement );

//     let h2Element = document.createElement( 'h2' );

//     h2Element.textContent = this.location ;

//     divElement.appendChild( h2Element );

//     let ulElement = document.createElement( 'ul' );

//     divElement.appendChild( ulElement );

//     let hourlySalesElement = 0;

//     for ( let i = 0; i < this.hourlySales.length; i++ ) {

//       let liElement = document.createElement( 'li' );

//       let cookiesNumber = this.customersPerHour();

//       liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

//       ulElement.appendChild( liElement );

//       hourlySalesElement = hourlySalesElement + cookiesNumber;

//       if ( i === 13 ){

//         let liElement=document.createElement( 'li' );

//         liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

//         ulElement.appendChild( liElement );
//       }
//     }
//   },
// };

// let lima = {
//   location  : 'Lima',
//   hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   minHourlyCustomers : 2,
//   maxHourlyCustomers : 16,
//   averageCookiesPerCustomer : 4.6,
//   customersPerHour : function() {
//     return Math.ceil( getRandomIntInclusive (
//       this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
//   },

//   render : function() {

//     const parentElement = document.getElementById( 'salmon' );

//     let divElement = document.createElement( 'div' );

//     parentElement.appendChild( divElement );

//     let h2Element = document.createElement( 'h2' );

//     h2Element.textContent = this.location ;

//     divElement.appendChild( h2Element );

//     let ulElement = document.createElement( 'ul' );

//     divElement.appendChild( ulElement );

//     let hourlySalesElement = 0;

//     for ( let i = 0; i < this.hourlySales.length; i++ ) {

//       let liElement = document.createElement( 'li' );

//       let cookiesNumber = this.customersPerHour();

//       liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

//       ulElement.appendChild( liElement );

//       hourlySalesElement = hourlySalesElement + cookiesNumber;

//       if ( i === 13 ){

//         let liElement=document.createElement( 'li' );

//         liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

//         ulElement.appendChild( liElement );
//       }
//     }
//   },
// };


// // seattle.render();

// // tokyo.render();

// // dubai.render();

// // paris.render();

// // lima.render();
