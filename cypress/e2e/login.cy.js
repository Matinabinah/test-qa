// TODO: Write tests for Lazr login page

import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

describe('Lazr Login Tests', () => {

    // 1. Valid login test
    it('Valid Login Flow', () => {
        loginPage.visitLoginPage();
        loginPage.enterEmail(Cypress.env("email"));
        loginPage.clickNext();
        loginPage.enterPassword(Cypress.env("password"));
        loginPage.clickSignIn();
    });

    // 2. Invalid login test
    it('InValid Login Flow', () => {
        loginPage.visitLoginPage();
        loginPage.enterEmail(Cypress.env("email"));
        loginPage.clickNext();
        loginPage.enterPassword(Cypress.env("invalidPassword"));
        loginPage.clickSignIn();
        loginPage.verifyError();
    });

});

