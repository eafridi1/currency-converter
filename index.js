import inquirer from "inquirer";
const currency = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.78,
    JPY: 111.05,
    CAD: 1.32,
    AUD: 1.38,
    CNY: 6.71,
    CHF: 0.99,
    SEK: 9.67,
    NZD: 1.51,
    PKR: 280.0,
    INR: 74.57
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "CHF", "SEK", "NZD", "PKR", "INR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "CHF", "SEK", "NZD", "PKR", "INR"]
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number"
    }
]);
console.log(user_answer);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted amount is ${convertedAmount}`);
