describe('Automize-auth-failed-test', () => {
    it('Авторизация с несуществующим логином и паролем', () => {
        cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.auth_url);
  
          cy.log('Ввод несуществующего логина');
          cy.get('.form-input--text').type(data.none_existent_login);
  
          cy.log('Ввод несуществующего пароля');
          cy.get('.form-input--password').type(data.none_existent_password);
  
          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();
  
          cy.log("Проверка что пользователь не авторизировался");
          cy.get('.form-error > span').should('exist');
      });
    });
    it('Авторизация с неправилным паролем', () => {
        cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.auth_url);
  
          cy.log('Ввод логина');
          cy.get('.form-input--text').type(data.login);
  
          cy.log('Ввод несуществующего пароля');
          cy.get('.form-input--password').type(data.password_incorrect);
          
          cy.log("Проверка что пользователь не авторизировался");
          cy.get('.form-error > span').should('exist');
      });
    });
    it('Авторизация c некорректным логином', () => {
        cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.auth_url);
  
          cy.log('Ввод несуществующего логина');
          cy.get('.form-input--text').type(data.login_incorrect);
  
          cy.log('Ввод пароля');
          cy.get('.form-input--password').type(data.password);
          
          cy.log("Проверка что пользователь не авторизировался");
          cy.get('.form-error > span').should('exist');
      });
    });
  });