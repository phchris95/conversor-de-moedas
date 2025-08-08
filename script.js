const converBytButton = document.querySelector(".convert-button")

function convertValues(){

    const inputValueConvert = document.querySelector(".input-value-convert").value
    const convertedCurrency = document.querySelector(".converted-currency")
    const currencyToConvert = document.querySelector(".convert-currency")

    const dolarToday = 5.54

    const valueConverted = inputValueConvert / dolarToday

    convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valueConverted)

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValueConvert)






}


converBytButton.addEventListener("click", convertValues)