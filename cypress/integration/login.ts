import { LoginPage } from '../pages/login_page'


describe('allLoginTest', function () {
    let loginpage = new LoginPage()

    beforeEach(function () {

        loginpage.navigate('https://trytestingthis.netlify.app/')


    })
    it('login test-valid cred', () => {

        loginpage.loginWithValidCredentials('test', 'test')
     
    })

    it('login test-invalid cred', () => {

        loginpage.loginWithInvalidCredentials('test1', '123')
        cy.get('.side').scrollTo('bottom')
        cy.get('[type="submit"]').should('be.visible',)

    })

})


