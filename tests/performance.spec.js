const {test, expect} = require("@playwright/test");



test('direct browser interaction', async({page})=> {

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const performanceTiming = await page.evaluate(() => {
    return JSON.stringify(window.performance.timing);
});

console.log("Performance Timing:", JSON.parse(performanceTiming));

// Extracting specific metrics
const ttfb = JSON.parse(performanceTiming).responseStart - JSON.parse(performanceTiming).navigationStart;
console.log(`Time to First Byte (TTFB): ${ttfb} ms`);





})


    





