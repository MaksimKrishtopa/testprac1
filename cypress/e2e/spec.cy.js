describe ('Cypress Tests', () =>{
  it('None-existent login test', () =>{
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.auth_url)

          cy.log('Ввод несуществующего логина')
          cy.get('.form-input--text')
              .type(data.login)

          cy.log('Клик по кнопке  "Войти"')
          cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
              .click()
              
          cy.log('Проверка что появился элемент сигнализирющий об ошибке')
          cy.get('div[class="passp=form-field__error"]')
              .should('exist')
      })
  })
});