const currency_one = document.getElementById("currency-one")
const currency_one_amount = document.getElementById("amount-one")
const currency_two = document.getElementById("currency-two")
const currency_two_amount = document.getElementById("amount-two")
const btn = document.getElementById('swap_btn')
const API_URL = `https://v6.exchangerate-api.com/v6/44b843d6bb447f9adf9078e5/latest`
const rate = document.getElementById("rate")



//Fetch data from api and some caculate logic
const Caculate_currency = () => {
    let currency_one_value = currency_one.value;
    let currency_two_value = currency_two.value;
    fetch(API_URL + `/${currency_one_value}`)
        .then(res => res.json())
        .then(data => {
            const currency_two_rate = data.conversion_rates[currency_two_value]
            rate.innerText = `1 ${currency_one_value} = ${currency_two_rate} ${currency_two_value}`
            currency_two_amount.value = (currency_one_amount.value * currency_two_rate).toFixed(2)
        }
        )
}

//swap currency
btn.onclick = () => {
    const c1_value = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = c1_value
}

//Events Onchange and OnInput 
currency_one.addEventListener("change", Caculate_currency)
currency_one_amount.addEventListener("input", Caculate_currency)
currency_two.addEventListener("change", Caculate_currency)
currency_two_amount.addEventListener("input", Caculate_currency)
Caculate_currency()