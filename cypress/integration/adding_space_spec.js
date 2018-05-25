describe('Adding a space', function() {

  beforeEach(function () {
    cy.visit('http://localhost:8000');
  })

  it('adds space to index page', function() {
    cy.get('.link-form').click()
    cy.url().should('eq', 'http://localhost:8000/spaces/new')
    cy.get('.input_field__spaceName')
      .type("Igor's house")
    cy.get('.input_field__spaceDescription')
      .type("11th Century Mud Hut")
    cy.get('.input_field__spacePrice')
      .type('1000000000')
    cy.get('.input_field__startDate')
      .type('2018-05-15')
    cy.get('.input_field__endDate')
      .type('2018-05-18')
    cy.get('form').submit()
    cy.url().should('eq', 'http://localhost:8000/')
    cy.get('.spaceName')
      .contains("Igor's house")
    // cy.get('.spaceDescription')
    //   .contains('11th Century Mud Hut')
    // cy.get('.spacePrice')
    //   .contains('1000000000')
    cy.get('.availableDates')
      .contains('2018-05-15 - 2018-05-18')
  })
})
