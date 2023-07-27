
describe('all api tests', () => {

    Cypress.config('baseUrl', 'https://reqres.in/api/')

    it('GET 1', () => {

        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.status).to.equal(200)
                expect(response.body).not.to.be.null
                expect(response.body.data).to.have.length(6)
            })
    })

    it('GET 2', () => {

        cy.request('GET', '/users?page=2').as('user_list')
            cy.get('@user_list')
                .should((response) => {
                    expect(response).to.have.property('status', 200)
                    expect(response.status).to.equal(200)
                    expect(response.body).not.to.be.null
                    expect(response.body.data).to.have.length(6)
                })

    })

    it('GET 3', () => {
        cy.request({
            'method' : 'GET',
            'url' : '/users?page=2',
            headers : {
                'content-Type' : 'application/json',
            },
            auth: {
                'username' : 'user1',
                'password' : 'pass1'
            }
        }) .then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.status).to.equal(200)
            expect(response.body).not.to.be.null
            expect(response.body.data).to.have.length(6)
        })

    })


    it('POST 1', () => {
        cy.request({
            'method' : 'POST',
            'url' : '/users',
            body: {
                'name': 'Anish',
                'job': 'Software Engineer'
            }

        }).then((response) => {
            expect(response).to.have.property('status', 201)
            expect(response.status).to.equal(201)
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('name', 'Anish')
        })

    })

    it('POST 2', () => {

        const reqBody = {
            'name': 'gladiator',
            'job': 'fight' 
        }

        cy.request('POST', '/users', reqBody)
            .then((response) => {
                expect(response).to.have.property('status', 201)
                expect(response.status).to.equal(201)
                expect(response.body).not.to.be.null
                expect(response.body).to.have.property('name', 'gladiator')

            })

    })
 
})