import americanOddConversion from "./americanOddConversion"
const bets = ["100", "-110", "200"]

bets.forEach(bet => {
    let result = americanOddConversion(bet);
    console.log(result)
})