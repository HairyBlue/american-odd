export default function americanOddConversion(bet: string){
    let probability: string;
    let num: number;
    if (bet.includes("-")) {
        num = parseInt(bet.split("-")[1])
        probability = ((num / (num + 100)) * 100).toFixed(2);    
    } else {
        num = parseInt(bet)
        probability = ((100 / (num + 100)) * 100).toFixed(2);
    }
    return probability;
}