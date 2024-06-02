const dayjs = require('dayjs');
const url = 'https://www.sfcinemacity.com'
const todayDate = dayjs().add(1,'days').format('DD MMM YYYY');
const nowTime = dayjs().format('HH:mm')
const expectTime = dayjs('2018-04-13 19:18').add(1, 'hours').format('HH:mm')
const nameMovie = 'My Boo'
const locationMovie = 'SFX CINEMA The Mall Lifestore Ngamwongwan'

const today = dayjs().add(1, 'day').set('hour', 0).set('minute', 0);
const todayTime = today.format('HH:mm');

const tomorrow = dayjs().add(1, 'day').set('hour', 21).set('minute', 30);
const tomorrowTime = tomorrow.format('HH:mm');

describe('Check Time Movie', () => {
   beforeEach(() => {
      cy.visit(url);
      cy.contains('a', 'ENG').click();
      cy.contains('a', 'Login/Sign up').should('exist');
      cy.get('.signin a').should('contain.text', "Login/Sign up");
   });

  //  it('Go to url', () => {
  //     cy.visit(url)
  //  })

  //  it.only('Change language', () => {
  //     cy.contains('a', 'ENG').click();
  //     cy.contains('a', 'Login/Sign up').should('exist');
  //     cy.get('.signin a').should('contain.text', "Login/Sign up")
  //  })

   it('Select Cinema', () => {
      cy.get('[class="button dropdown-button"]')
         .contains('Select Cinema')
         .click()
      cy.contains(locationMovie)
         .click()

      cy.get('[class="button dropdown-button"]')
        .contains('All Movie')
        .click()
      cy.get('h3[class="name"]')
        .contains(nameMovie)
        .click()
      cy.get('[class="button showtime-button"]')
        .contains('Showtime')
        .click()

      cy.get('.slick-list p')
        .contains(todayDate)
        .click()

      // cy.get('[class="showtime-list"]>div')
      //   .children()
      //   .children()
        // .children()
        // .children()

      cy.get('.time-list li').each($list => {
        cy.log($list.text())
        })

      cy.get('[class="time-list"]>li').each($list => {
        // cy.log(expectTime)
        if(
          $list.get(0).innerText >= todayTime && 
          $list.get(0).innerText <= tomorrowTime
        ) {
            cy.wrap($list.children()).click()
            return false
          }
      })

      cy.contains('Selected Seat')

   })
})

// describe('Check Time Movie', () => {
//    // const url = 'https://yoururl.com'; // เปลี่ยนเป็น URL ที่คุณต้องการ
//    // const locationMovie = 'Your Cinema Location'; // เปลี่ยนเป็นตำแหน่งโรงหนังที่คุณต้องการ
 
//    it('Go to url', () => {
//      cy.visit(url);
//    });
 
//    it('Change language', () => {
//      cy.contains('a', 'ENG').click();
//      cy.contains('a', 'Login/Sign up').should('exist');
//      cy.get('.signin a').should('contain.text', "Login/Sign up");
//    });
 
//    it('Select Cinema', () => {
//      cy.get('[class="button dropdown-button"]')
//        .contains('Select Cinema')
//        .click();
//      cy.contains(locationMovie)
//        .click();
//    });
//  });
 