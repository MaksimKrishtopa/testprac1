describe('Некорректная регистрация и выбор роли студента', () => {
    // it('Регистрация с неправильным логином', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу регистрации');
    //         cy.visit(data.register_url);
  
    //         cy.log('Ввод неверного логина');
    //         cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_incorrect);
  
    //         cy.log('Ввод правильной почты');
    //         cy.get('.form-input--email').type(data.email);
  
    //         cy.log('Ввод правильного пароля');
    //         cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //         cy.log('Правильный пароль для подтверждения');
    //         cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //         cy.log("Проверка что пользователь не зарегистрировался и логин неверен");
    //         cy.get('.form-error > span').should('exist');
    //     });
    // });
    // it('Негативный тест логина на уникальность', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод неверного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод правильной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод правильного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод правильного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //       cy.log('Клик по кнопке "Войти"');
    //       cy.get(':nth-child(4) > .button').click();
  
    //   });
    // });
    // it('Негативный тест регистрации c неправильной почтой', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод неверной почты');
    //       cy.get('.form-input--email').type(data.email_incorrect);
  
    //       cy.log('Ввод правильного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

    //   });
    // });
    //  it('Негативный тест регистрации c неуникальной почтой', () => {
    //    cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод неуникальной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //        cy.log('Ввод правильного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод правильного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //        cy.log('Клик по кнопке "Войти"');
    //       cy.get(':nth-child(4) > .button').click();
  
    //   });
    // });
    // it('Негативный тест регистрации c неверным паролем', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод праильной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод неверного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password_incorrect);
  
    //       cy.log('Ввод верного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm_incorrect);
  
    //   });
    // });
    // it('Негативный тест регистрации c неверным паролем для подтверждения', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод правильной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод верного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод правильного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm_incorrect);
  
    //   });
    // });
    // it('Негативный тест регистрации c неправильной фамилией', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод правильной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод корректного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод правильного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //       cy.log('Клик по кнопке "Войти"');
    //       cy.get(':nth-child(4) > .button').click();
  
    //       cy.log('Ввод правильной фамилии');
    //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname_incorrect);
  
    //       cy.log('Ввод правильного имени');
    //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name);
  
    //       cy.log('Ввод правильного отчества')
    //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic);
  
    //   });
    // });
    // it('Негативный тест регистрации c неверным именем', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод правильного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод правильной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод правильного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод правильного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //       cy.log('Клик по кнопке "Войти"');
    //       cy.get(':nth-child(4) > .button').click();
  
    //       cy.log('Ввод правильной фамилии');
    //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname);
  
    //       cy.log('Ввод неверного имени');
    //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name_incorrect);
  
    //       cy.log('Ввод верного отчества');
    //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic);
  
    //   });
    // });
    // it('Негативный тест регистрации c неверным отчеством', () => {
    //   cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу регистрации');
    //       cy.visit(data.register_url);
  
    //       cy.log('Ввод верного логина');
    //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_canbe_unique);
  
    //       cy.log('Ввод верной почты');
    //       cy.get('.form-input--email').type(data.email_canbe_unique);
  
    //       cy.log('Ввод верного пароля');
    //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);
  
    //       cy.log('Ввод верного пароля для подтверждения');
    //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);
  
    //       cy.log('Клик по кнопке "Войти"');
    //       cy.get(':nth-child(4) > .button').click();
  
    //       cy.log('Ввод правиьной фамилии');
    //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname);
  
    //       cy.log('Ввод правильного имени');
    //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name);
  
    //       cy.log('Ввод неверного отчества');
    //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic_incorrect);
  
    //   });
    // });
    it('Негативный тест выбора роли "Студент"', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit('https://dev.profteam.su/login');
  
          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.registered_login);
  
          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.registered_password);
  
          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();
          cy.get('.page-nav__role-block > .button').click();
          cy.get('.select-role-form > :nth-child(1)').click();
          cy.get('.variants-company > :nth-child(1)').click();
          cy.get('div.search-input__field > .form-input--text').type('ГазПром');
          cy.get('.search-input__item').click();
          cy.get('.choose-company > .button').click();
          cy.log("Неверное добавление роли 'Студент'");
          cy.get('.menu-item__name').should('have.text', 'Роль не определена');
          cy.get('[data-v-02661ece=""][data-v-4e40dec7=""]').should('not.exist');
          cy.get(':nth-child(3) > .menu-item__item-name').click();
      });
    });
  });