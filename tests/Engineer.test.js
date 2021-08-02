const Engineer = require('../lib/Engineer')

describe("Verify Github account provided", () => {
    it("Verify Github", () => {
        const testGithub = "alexgt";
        const empInstance = new Engineer("alex", 1, "alex@email.com", testGithub)
        expect(empInstance.github).toBe(testGithub)
    })
})