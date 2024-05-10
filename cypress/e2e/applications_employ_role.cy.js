describe('Добавление роли работодателя', () => {
    it('Позитивный тест на заявку на добалвение роли работодателя', () => {
    cy.fixture('applications_employer').then(data => {
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
    cy.log('Выбор роли работодателя')
    cy.get('.select-role-form > :nth-child(1)')
    .click()
    cy.log('Выбор создания нового лк роли работодателя')
    cy.get('.variants-company > :nth-child(2)')
    .click()
    cy.log('Ввод названия организации')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.comp_name)

    cy.log('Ввод адреса организации')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_comp)

    cy.log('Ввод описания организации')
    cy.get('.form-area').type(data.desc_company)

    cy.log('Клик по кнопке "Добавить"')
    cy.get('.create-company-form__description-block > .button')
    .click()
    cy.log('Переход на страницу заявок')
    cy.get(':nth-child(3) > .menu-item__item-name')
    .click()
    
    });
    });
});