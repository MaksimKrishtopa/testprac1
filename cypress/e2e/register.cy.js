describe('Регистрация и выбор роли пользователя', () => {
    it('Успешная регистрация', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации');
            cy.visit(data.register_url);
  
            cy.log('Ввод правильного логина');
            cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text')
            .type(data.registered_login);
  
            cy.log('Ввод правильной почты');
            cy.get('.form-input--email')
            .type(data.email);
  
            cy.log('Ввод правильного пароля');
            cy.get(':nth-child(3) > .form-control--medium .form-input--password')
            .type(data.registered_password);
  
            cy.log('Ввод пароля для подтверждения');
            cy.get(':nth-child(4) > .form-control--medium .form-input--password')
            .type(data.password_confirm);
  
            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(4) > .button').click();
  
            cy.log('Ввод правильной фамилии');
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(data.surname);
  
            cy.log('Ввод правильного имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
            .type(data.name)
  
            cy.log('Ввод правильного отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
            .type(data.patronymic)
  
            cy.log('Клик по кнопке "Создать аккаунт"')
            cy.get(':nth-child(3) > .button')
            .click()
  
            cy.log("Проверка что пользователь зарегестрирован, переход в личный кабинет");
            cy.url().should('equal', 'https://dev.profteam.su/account/main');
        });
    });
    it('Успешный тест выбора роли "Студент"', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit('https://dev.profteam.su/login');
  
          cy.log('Ввод зарегестрированного логина');
          cy.get('.form-input--text').type(data.registered_login);
  
          cy.log('Ввод зарегестрированного пароля');
          cy.get('.form-input--password').type(data.registered_password);
  
          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();
  
          cy.get('.page-nav__role-block > .button').click();
          cy.get('.select-role-form > :nth-child(3)').click();
      });
    });
  });