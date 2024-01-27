/// <reference types="cypress" />

describe('Testes para a Home', () => {
    it('Deve incluir 01 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Kenedy Jardim')
        cy.get('input[placeholder="E-mail"]').type('kenedyjardim@email.com')
        cy.get('input[placeholder="Telefone"]').type('99 9 99999999')
        cy.get('button[type="Submit"]').click()
    })
    it('Alterar Contato criado', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear().type('Gian Ebac')
        cy.get('input[placeholder="E-mail"]').clear().type('ebac@email.com')
        cy.get('input[placeholder="Telefone"]').clear().type('88 8 88888888')
        cy.get('.alterar').click()
    })
    it('Excluir contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.delete').first().click()
    })
})