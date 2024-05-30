const url = 'https://www.sfcinemacity.com'
const todayDate = Cypress.moment().format('DD MMM YYYY')
const nowTime = Cypress.moment().format('HH:mm')
const expectTime = Cypress.moment().add(1, 'hours').format('HH:mm')
const nameMovie = 'Homestay'
const locationMovie = 'SFX CINEMA Central Rama 9'

describe('Check Time Movie', () => {
    it('Go to url', () => {
       cy.visit(url)
    })
  })