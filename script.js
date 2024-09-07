function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Exchange rates (hardcoded for this example)
    const exchangeRates = {
        USD: { INR: 82.0, EUR: 0.85, GBP: 0.74 },
        EUR: { INR: 96.5, USD: 1.18, GBP: 0.87 },
        INR: { USD: 0.012, EUR: 0.0104, GBP: 0.0091 },
        GBP: { INR: 111.5, USD: 1.35, EUR: 1.15 }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById("resultText").innerText = `Please select different currencies to convert`;
        return;
    }

    // Check if the conversion is possible
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById("resultText").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
