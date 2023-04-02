/// <reference types="cypress"/>
//const longString = 'a'.repeat(2000);
const payloadLatLon = require('../payloads/openLatLon.json')

export function openWeather() {
    return cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5ab4d6b3838b320adf4dd754add81990',
        failOnStatusCode: false,
        body: payloadLatLon       
    })
    
}