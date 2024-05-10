describe('Добавление роли ОУ', () => {
    it('Негативный тест на правильность написания названия ОУ', () => {
    cy.fixture('applications_ou').then(data => {
    cy.log('Переход на страницу авторизации')
    cy.visit(data.auth_url)
    cy.log('Ввод логина')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
    cy.log('Ввод пароля')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)
    cy.log('Клик по кнопке  "Войти"')
    cy.get(':nth-child(3) > .button')
        .click();
    cy.log('Клик по кнопке "Выбрать роль"')
    cy.get('.page-nav__role-block > .button')
    .click()
    cy.log('Выбор роли ОУ')
    cy.get('.select-role-form > :nth-child(2)')
    .click()
    cy.log('Выбор создания нового лк ОУ')
    cy.get('.variants-company > :nth-child(2)')
    .click()
    cy.log('Ввод названия ОУ')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.negative_name_edu)
    cy.log('Ввод адреса ОУ')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_edu)
    cy.log('Ввод описания ОУ')
    cy.get('.form-area').type(data.desc_edu)
    });
    });

    it('Негативный тест на проверку правильности написания адреса ОУ', () => {
        cy.fixture('applications_ou').then(data => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.auth_url)
        cy.log('Ввод логина')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
        cy.log('Ввод пароля')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)
        cy.log('Клик по кнопке "Войти"')
        cy.get('.form__buttons > :nth-child(3)')
        .click()
        cy.log('Клик по кнопке "Выбрать роль"')
        cy.get('.page-nav__role-block > .button')
        .click()
        cy.log('Выбор роли ОУ')
        cy.get('.select-role-form > :nth-child(2)')
        .click()
        cy.log('Выбор создания нового ЛК ОУ')
        cy.get('.variants-company > :nth-child(2)')
        .click()
        cy.log('Ввод названия ОУ')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_edu)
        cy.log('Ввод адреса организации')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.negative_address_edu)
        cy.log('Ввод описания ОУ')
        cy.get('.form-area').type(data.desc_edu)

        });
    });

        it('Негативный тест на проверку правильности описания ОУ', () => {
        cy.fixture('applications_ou').then(data => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.auth_url)
        cy.log('Ввод логина')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
        cy.log('Ввод пароля')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)
        cy.log('Клик по кнопке "Войти"')
        cy.get('.form__buttons > :nth-child(3)')
        .click()
        cy.log('Клик по кнопке "Выбрать роль"')
        cy.get('.page-nav__role-block > .button')
        .click()
        cy.log('Выбор роли ОУ')
        cy.get('.select-role-form > :nth-child(2)')
        .click()
        cy.log('Выбор создания лк ОУ')
        cy.get('.variants-company > :nth-child(2)')
        .click()
        cy.log('Ввод названия ОУ')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_edu)
        cy.log('Ввод адреса организации')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_edu)
        cy.log('Ввод описания ОУ')
        cy.get('.form-area').type(data.negative_desc_edu)

        });
    });
        
});
    