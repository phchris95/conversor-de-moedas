const converBytButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencySelectConvert = document.querySelector(".currency-select-convert")

const currencyToConvert = document.querySelector(".convert-currency")
const inputValueConvert = document.querySelector(".input-value-convert").value

// Função para converter moedas, quando mudamos apenas o segundo select
function convertValues(){

    
    const convertedCurrency = document.querySelector(".converted-currency")
    

    const dolarToday = 5.54
    const euroToday = 6.31

    if (currencySelectConverted.value == "dolar") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueConvert / dolarToday)
    }

    if (currencySelectConverted.value == "euro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueConvert / euroToday)
    }


    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValueConvert)

}

// Função que muda o texto e a imagem da moeda convertida do segundo "select"
function changeCurrencyConverted(){

    const currencyName = document.getElementById("currency-name")
    const currencyImageConverted = document.getElementById("currency-image-converted")

    if(currencySelectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro.png"
    }
    
    convertValues()

}

// Funçaõ que muda o texto e imagem da moeda a ser convertida a partir do primeiro "select"
function changeCurrencyConvert() {

    const currencyNameConvert = document.getElementById("currency-name-convert")
    const currencyImageConvert = document.getElementById("currency-image-convert")

    if (currencySelectConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/dolar.png"

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueConvert)

        

    }


}




converBytButton.addEventListener("click", convertValues)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
currencySelectConvert.addEventListener("change", changeCurrencyConvert)