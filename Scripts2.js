const convertButton = document.querySelector('.convert-btn');
const currencySelect = document.querySelector('.currency-select');

convertButton.addEventListener('click',convertValues)

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.cvc');
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolaToday = 5.40
    const euroToday = 6.10
    const libraToday = 7.29
    const yenToday = 26.418962

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurrencyValue / dolaToday);

    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == 'yene'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP',{style:'currency',currency:'JPY'}).format(inputCurrencyValue * yenToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurrencyValue)

}

currencySelect.addEventListener('change',currencyChanges)

function currencyChanges(){
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = './assets/img/estados-unidos (1) 1.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    if(currencySelect.value == 'libra'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/libra-logo.png'
    }

    if(currencySelect.value == 'yene'){
        currencyName.innerHTML = 'Yene'
        currencyImage.src = './assets/img/iene-logo.png'
        
    }

    convertValues()
}