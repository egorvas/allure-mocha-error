const { allure } = require("allure-mocha/runtime");

it("is a test", () => {
    console.log(allure);
    allure.epic("Some info");
});