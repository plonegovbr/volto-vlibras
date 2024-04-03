context('Load VLibras', () => {
  describe('Visit a page', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
    });

    it('VLibras should be visible after visiting a page', function () {
      cy.visit('/document');
      cy.get('#vlibras-wrapper', { timeout: 10000 }).should('be.visible');
    });
  });
});
