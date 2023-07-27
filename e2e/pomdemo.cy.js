
import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage

describe('All Login Tests', () => {

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    it('Login with valid credentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()

    })


    it('login with invalid creentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin')
        loginPage.clickLogin()

        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()

    })


})

