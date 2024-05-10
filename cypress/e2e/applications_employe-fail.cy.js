describe('Негативный тест написания правильного названия организации работодателя', () => {
    it('Правильное название работодателя', () => {
    cy.fixture('applications_employer').then(data => {
    25
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
    cy.log('Выбор роли работодателя')
    cy.get('.select-role-form > :nth-child(1)')
    .click()
    cy.log('Выбор создания лк работодателя')
    cy.get('.variants-company > :nth-child(2)')
    .click()
    cy.log('Ввод неправильного названия организации работодателя')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.negative_comp_name)

    cy.log('Ввод адреса организации')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_comp)

    cy.log('Ввод описания организации')
    cy.get('.form-area').type(data.desc_company)

    cy.log('Проверка выявления ошибки в названии работодателя')
    cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
    .should('exist')
    });
 });


 it('Проверка правильности написания адреса компании', () => {
    cy.fixture('applications_employer').then(data => {
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
    cy.log('Выбор роли работодателя')
    cy.get('.select-role-form > :nth-child(1)')
    .click()
    cy.log('Выбор создания лк работодателя')
    cy.get('.variants-company > :nth-child(2)')
    .click()
    cy.log('Ввод названия работодателя')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.comp_name)
    cy.log('Ввод неправильного адреса компании')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.negative_address_comp)
    cy.log('Ввод описания организации')
    cy.get('.form-area').type(data.desc_company)
    });
 });

 it('Проверка правильности описания компании', () => {
    cy.fixture('applications_employer').then(data => {
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
    cy.log('Выбор роли работодателя')
    cy.get('.select-role-form > :nth-child(1)')
    .click()
    cy.log('Выбор создания лк работодателя')
    cy.get('.variants-company > :nth-child(2)')
    .click()
    cy.log('Ввод названия работодателя')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.comp_name)
    cy.log('Ввод адреса компании')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_comp)
    cy.log('Ввод неправильного описания организации')
    cy.get('.form-area').type(data.negative_desc_company)
    });
 });
});