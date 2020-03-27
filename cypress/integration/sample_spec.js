describe('My first sample test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
} )

describe('My first failing sample test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(false)
    })
})
