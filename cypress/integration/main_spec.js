const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

describe('Navigation', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/', {
      statusCode: 200,
      fixture: 'articles.json'
    })
    cy.visit('http://localhost:3000')

  })

  it('Should contain the name of the application', () => {
    cy.contains('NYT NewsBlurbs')
  })

  it('Should have an options selector', () => {
    cy.get('select')
  })

  it('Should be able to choose a different category', () => {
    cy.get('select').select('World')
    cy.contains('Top World Articles')
  })

  it('Should display the current date', () => {
    let date = dayjs().format('LL')
    cy.get('.current-date').should('have.text', date)
  })

  it('Should be able to search for articles', () => {
    cy.get('form').get('input').type('e')
    cy.get('article')
  })

  it('Should inform user if their search yields no results', () => {
    cy.get('form').get('input').type('asdfasdf')
    cy.contains('No matches for search - please try another.')
  })

  it('Should inform and redirect user if visiting an invalid page', () => {
    cy.visit('http://localhost:3000/asdkfjhasf')
    cy.contains('Invalid URL! Redirecting now...')
    cy.wait(2600)
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
