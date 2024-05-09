describe ('Automize-auth-test', () =>{
  it('Авторизация', () =>{
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.auth_url)

          cy.log('Ввод несуществующего логина')
          cy.get('.form-input--text')
              .type(data.login)


          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке  "Войти"')
          cy.get(':nth-child(3) > .button')
              .click();
              
          cy.log('Проверка успешной авторизации')
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
      })
  })
});