'use strict';

function getRandomIntInclusive ( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let seattle = {
  location  : 'Seattle',
  hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  minHourlyCustomers : 23,
  maxHourlyCustomers : 65,
  averageCookiesPerCustomer : 6.3,
  customersPerHour : function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  },

  render : function() {

    const parentElement = document.getElementById( 'salmon' );

    let h1Element = document.createElement( 'h1' );

    h1Element.textContent = 'Pat\'s Salmon Cookies: Sales Data' ;

    parentElement.appendChild( h1Element );

    let divElement = document.createElement( 'div' );

    parentElement.appendChild( divElement );

    let h2Element = document.createElement( 'h2' );

    h2Element.textContent = this.location ;

    divElement.appendChild( h2Element );

    let ulElement = document.createElement( 'ul' );

    divElement.appendChild( ulElement );

    let hourlySalesElement = 0;

    for ( let i = 0; i < this.hourlySales.length; i++ ) {

      let liElement = document.createElement( 'li' );

      let cookiesNumber = this.customersPerHour();

      liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

      ulElement.appendChild( liElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let liElement=document.createElement( 'li' );

        liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

        ulElement.appendChild( liElement );
      }
    }
  },
};

let Tokyo = {
  location  : 'Tokyo',
  hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  minHourlyCustomers : 3,
  maxHourlyCustomers : 24,
  averageCookiesPerCustomer : 1.2,
  customersPerHour : function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  },

  render : function() {

    const parentElement = document.getElementById( 'salmon' );

    let divElement = document.createElement( 'div' );

    parentElement.appendChild( divElement );

    let h2Element = document.createElement( 'h2' );

    h2Element.textContent = this.location ;

    divElement.appendChild( h2Element );

    let ulElement = document.createElement( 'ul' );

    divElement.appendChild( ulElement );

    let hourlySalesElement = 0;

    for ( let i = 0; i < this.hourlySales.length; i++ ) {

      let liElement = document.createElement( 'li' );

      let cookiesNumber = this.customersPerHour();

      liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

      ulElement.appendChild( liElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let liElement=document.createElement( 'li' );

        liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

        ulElement.appendChild( liElement );
      }
    }
  },
};

let Dubai = {
  location  : 'Dubai',
  hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  minHourlyCustomers : 11,
  maxHourlyCustomers : 38,
  averageCookiesPerCustomer : 3.7,
  customersPerHour : function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  },

  render : function() {

    const parentElement = document.getElementById( 'salmon' );

    let divElement = document.createElement( 'div' );

    parentElement.appendChild( divElement );

    let h2Element = document.createElement( 'h2' );

    h2Element.textContent = this.location ;

    divElement.appendChild( h2Element );

    let ulElement = document.createElement( 'ul' );

    divElement.appendChild( ulElement );

    let hourlySalesElement = 0;

    for ( let i = 0; i < this.hourlySales.length; i++ ) {

      let liElement = document.createElement( 'li' );

      let cookiesNumber = this.customersPerHour();

      liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

      ulElement.appendChild( liElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let liElement=document.createElement( 'li' );

        liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

        ulElement.appendChild( liElement );
      }
    }
  },
};

let Paris = {
  location  : 'Paris',
  hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  minHourlyCustomers : 20,
  maxHourlyCustomers : 38,
  averageCookiesPerCustomer : 2.3,
  customersPerHour : function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  },

  render : function() {

    const parentElement = document.getElementById( 'salmon' );

    let divElement = document.createElement( 'div' );

    parentElement.appendChild( divElement );

    let h2Element = document.createElement( 'h2' );

    h2Element.textContent = this.location ;

    divElement.appendChild( h2Element );

    let ulElement = document.createElement( 'ul' );

    divElement.appendChild( ulElement );

    let hourlySalesElement = 0;

    for ( let i = 0; i < this.hourlySales.length; i++ ) {

      let liElement = document.createElement( 'li' );

      let cookiesNumber = this.customersPerHour();

      liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

      ulElement.appendChild( liElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let liElement=document.createElement( 'li' );

        liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

        ulElement.appendChild( liElement );
      }
    }
  },
};

let Lima = {
  location  : 'Lima',
  hourlySales : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  minHourlyCustomers : 2,
  maxHourlyCustomers : 16,
  averageCookiesPerCustomer : 4.6,
  customersPerHour : function() {
    return Math.ceil( getRandomIntInclusive (
      this.minHourlyCustomers, this.maxHourlyCustomers ) * this.averageCookiesPerCustomer );
  },

  render : function() {

    const parentElement = document.getElementById( 'salmon' );

    let divElement = document.createElement( 'div' );

    parentElement.appendChild( divElement );

    let h2Element = document.createElement( 'h2' );

    h2Element.textContent = this.location ;

    divElement.appendChild( h2Element );

    let ulElement = document.createElement( 'ul' );

    divElement.appendChild( ulElement );

    let hourlySalesElement = 0;

    for ( let i = 0; i < this.hourlySales.length; i++ ) {

      let liElement = document.createElement( 'li' );

      let cookiesNumber = this.customersPerHour();

      liElement.textContent = this.hourlySales[i] + ': ' + cookiesNumber + ' cookies';

      ulElement.appendChild( liElement );

      hourlySalesElement = hourlySalesElement + cookiesNumber;

      if ( i === 13 ){

        let liElement=document.createElement( 'li' );

        liElement.textContent='Total: ' + hourlySalesElement + ' cookies';

        ulElement.appendChild( liElement );
      }
    }
  },
};


seattle.render();

Tokyo.render();

Dubai.render();

Paris.render();

Lima.render();
