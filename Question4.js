function calculateTax(income) {
    function getTaxRate(income) {
        if (income <= 20000) {
            return 0.05;  
        } else if (income <= 50000) {
            return 0.1;  
        } else if (income <= 100000) {
            return 0.2;  
        } else {
            return 0.3;  
        }
    }
    const taxRate = getTaxRate(income);
    return income * taxRate;
}

const income1 = 15000;
const income2 = 40000;
const income3 = 75000;
const income4 = 120000;

console.log(`Tax for income $${income1} is $${calculateTax(income1)}`);
console.log(`Tax for income $${income2} is $${calculateTax(income2)}`);
console.log(`Tax for income $${income3} is $${calculateTax(income3)}`);
console.log(`Tax for income $${income4} is $${calculateTax(income4)}`);
