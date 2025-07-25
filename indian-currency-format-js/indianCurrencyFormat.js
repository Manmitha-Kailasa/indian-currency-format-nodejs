// Convert number to Indian currency format
function formatIndianCurrency(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let lastThree = integerPart.slice(-3);
    let otherNumbers = integerPart.slice(0, -3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    let formattedInt = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
}

// Test Cases
console.log(formatIndianCurrency(123456.7891));
console.log(formatIndianCurrency(123456789));
