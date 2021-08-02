

const Engineer = require('../lib/Engineer')

describe("Verify Github account provided", () => {
    it("githib", () => {
        const testGithub = "alexgt";
        const empInstance = new Engineer("alex", 1, "alex@email.com", testGithub)
        expect(empInstance.testGithub).toBe(testGithub)
    })
})