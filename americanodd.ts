(() => {
    const bets = ["100", "-110", "200"]
    bets.forEach(bet => {
        let probability: string;
        let num: number;
        if (bet.includes("-")) {
            num = parseInt(bet.split("-")[1])
            probability = ((num / (num + 100)) * 100).toFixed(2);
            console.log(`Favorite: Probablity of betting ${bet} is ${probability}%`)
        } else {
            num = parseInt(bet)
            probability = ((100 / (num + 100)) * 100).toFixed(2);
            console.log(`Underdog: Probablity of betting ${bet} is ${probability}%`)
        }
    })
})()