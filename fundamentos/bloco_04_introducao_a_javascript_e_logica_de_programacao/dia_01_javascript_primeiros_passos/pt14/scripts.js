const productCost = 8.00;
const productSellValue = 24.50;
const productTax = productCost * 0.2;
const totalCost = productCost + productTax;
const profitProduct = productSellValue - totalCost;

if (productCost < 0 || productSellValue < 0 || productTax < 0 ) {
    console.log('Invalid Input')
} else {
    console.log (profitProduct);
}

