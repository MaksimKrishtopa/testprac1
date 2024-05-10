describe('Добавление роли ОУ', () => {
    it('Позитивный тест на заявку на добавление роли ОУ', () => {
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
    24
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_edu)
    cy.log('Ввод адреса ОУ')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_edu)
    cy.log('Ввод описания ОУ')
    cy.get('.form-area').type(data.desc_edu)
    cy.log('Клик по кнопке "Добавить"')
    cy.get('.create-company-form__description-block > .button')
    .click()
    cy.log('Переход на страницу заявок (клик по ссылке "Заявки")')
    cy.get(':nth-child(3) > .menu-item__item-name')
    .click()
    });
    });
});
    