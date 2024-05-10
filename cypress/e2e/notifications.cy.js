describe('Просмотр уведомлений', () => {
    it("Позитивный тест просмотра уведомлений пользователем", () => {
    cy.fixture('notifications_positive').then(data => {
    cy.log('Переход на страницу авторизации')
    cy.visit(data.auth_url)
    cy.log('Ввод логина')
    cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
    cy.log('Ввод пароля')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)
    cy.log('Клик по кнопке "Войти"')
    cy.get('.form__buttons > :nth-child(3)')
    .click()

    cy.log('Клик по ссылке "Уведомления"')
    cy.get('.header__nav > [href="/notification"] > .header__label')
    .click()

    cy.log('Клик по кнопке "Просмотреть"')
    cy.get(':nth-child(1) > .notification-list-item > .button').click()


    });
    });

    it("Позитивный тест прочтения уведомлений пользователем", () => {
        cy.fixture('notifications_positive').then(data => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.auth_url)
        cy.log('Ввод логина')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
        cy.log('Ввод пароля')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type(data.password)
        cy.log('Клик по кнопке "Войти"')
        cy.get('.form__buttons > :nth-child(3)')
        .click()
    
        cy.log('Клик по ссылке "Уведомления"')
        cy.get('.header__nav > [href="/notification"] > .header__label')
        .click()

        cy.log('Клик по кнопке "Прочитать все"')
        cy.get('.notification-title > .link')
        .click()
        });
        });
});