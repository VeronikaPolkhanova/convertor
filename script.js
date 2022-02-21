const BYN = 1;
const RUB = 0.033;
const USD = 2.60;
const EUR = 2.94;
const CNY = 0.41;

function CheckValue(value) {
    switch (value) {
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

function Convert(from_curency, to_curency, value) {
    if (from_curency === to_curency)
        return value
    else if (from_curency === BYN)
        return value / to_curency
    else if (to_curency === BYN)
        return value * from_curency
    else
        return (value * from_curency) / to_curency
}

let selected_from = document.getElementById('from_curency_select').value;

function onFromSelect() {
    selected_from = document.getElementById('from_curency_select').value;
}

function onToSelect() {
    selected_to = document.getElementById('to_curency_select').value;
}

function res(event) {
    from_curency = CheckValue(selected_from);
    let input_value = Number(document.getElementById('inputValue').value);

    const output_BYN = Convert(from_curency, BYN, input_value).toFixed(2);
    const output_RUB = Convert(from_curency, RUB, input_value).toFixed(2);
    const output_EUR = Convert(from_curency, EUR, input_value).toFixed(2);
    const output_USD = Convert(from_curency, USD, input_value).toFixed(2);
    const output_CNY = Convert(from_curency, CNY, input_value).toFixed(2);      

    document.getElementById('output_BYN').innerHTML = `${output_BYN} Br`;
    document.getElementById('output_RUB').innerHTML = `${output_RUB} ₽`;
    document.getElementById('output_EUR').innerHTML = `${output_EUR} €`;
    document.getElementById('output_USD').innerHTML = `${output_USD} $`;
    document.getElementById('output_CNY').innerHTML = `${output_CNY} ¥`;

    event.preventDefault();
}