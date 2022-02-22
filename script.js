const BYN = 1;
const RUB = 0.033;
const USD = 2.60;
const EUR = 2.94;
const CNY = 0.41;

function Rand(value) {
    let rand = Math.random();
    if (rand > 0.5) return (value - value * (rand / 10)).toFixed(2);
    else return (value + value * (rand / 10)).toFixed(2);
}

function Convert(from_currency, to_currency, value) {
    return ((from_currency / to_currency) * value).toFixed(2);
}

function CheckSelect(select) {
    switch (select) {
        case "BYN":
            return BYN;
        case "RUB":
            return RUB;
        case "USD":
            return USD;
        case "EUR":
            return EUR;
        case "CNY":
            return CNY;
    }
}

function CheckValue(input_value) {
    if (input_value < 0) {
        alert("Количество валюты не может быть меньше нуля!");
        document.getElementById('inputValue').value = Math.abs(input_value);
        return Math.abs(input_value);
    }
    else return input_value
}

function CheckDate(date) {
    const new_date = new Date(date);
    const today = new Date();
    if (new_date > today) {
        alert("Нельзя посмотреть курс на будущее");
        document.getElementById('data_picker').value = today.format("yyyy-mm-dd");
        return today.format("yyyy-mm-dd")
    }
    else return date
}

let selected_from = document.getElementById('from_currency_select').value;;
let data_value;
const min = new Date();
min.setDate(min.getDate() - 14);

document.getElementById('data_picker').value = (new Date()).format("yyyy-mm-dd");
document.getElementById('data_picker').min = min.format("yyyy-mm-dd");

document.getElementById('currency_BYN').innerHTML = BYN;
document.getElementById('currency_RUB').innerHTML = RUB;
document.getElementById('currency_EUR').innerHTML = EUR;
document.getElementById('currency_USD').innerHTML = USD;
document.getElementById('currency_CNY').innerHTML = CNY;

function onDataSelect() {
    data_value = document.getElementById('data_picker').value;
    data_value = CheckDate(data_value);

    const new_date = new Date(data_value).getDate();
    const today = new Date().getDate();

    if (new_date === today) {
        document.getElementById('currency_BYN').innerHTML = BYN;
        document.getElementById('currency_RUB').innerHTML = RUB;
        document.getElementById('currency_EUR').innerHTML = EUR;
        document.getElementById('currency_USD').innerHTML = USD;
        document.getElementById('currency_CNY').innerHTML = CNY;
    }
    else if (today > new_date) {
        document.getElementById('currency_BYN').innerHTML = Rand(BYN);
        document.getElementById('currency_RUB').innerHTML = Rand(RUB);
        document.getElementById('currency_EUR').innerHTML = Rand(EUR);
        document.getElementById('currency_USD').innerHTML = Rand(USD);
        document.getElementById('currency_CNY').innerHTML = Rand(CNY);
    }
}

function onCurrencySelect() {
    selected_from = document.getElementById('from_currency_select').value;
}

function onInput(event) {
    let input_value = Number(document.getElementById('input_value').value);

    input_value = CheckValue(input_value);
    from_currency = CheckSelect(selected_from);

    const output_BYN = Convert(from_currency, BYN, input_value);
    const output_RUB = Convert(from_currency, RUB, input_value);
    const output_EUR = Convert(from_currency, EUR, input_value);
    const output_USD = Convert(from_currency, USD, input_value);
    const output_CNY = Convert(from_currency, CNY, input_value);

    document.getElementById('output_BYN').innerHTML = `${output_BYN} Br`;
    document.getElementById('output_RUB').innerHTML = `${output_RUB} ₽`;
    document.getElementById('output_EUR').innerHTML = `${output_EUR} €`;
    document.getElementById('output_USD').innerHTML = `${output_USD} $`;
    document.getElementById('output_CNY').innerHTML = `${output_CNY} ¥`;

    event.preventDefault();
}