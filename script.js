// Cotação de moedas do dia
const USD = 5.46;
const EUR = 6.09;
const GBP = 7.31;

// Obtendo os elementos do formulário
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const description = document.querySelector("#description");
const result = document.querySelector('#result');

// Manipulando o Input amount para receber somente números
amount.addEventListener("input", () => {

    const hasCharacterRegex = /\D+/g; // Verifica os caracteres digitados no input
    amount.value = amount.value.replace(hasCharacterRegex, ""); // Apaga os caracteres digitados

})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {

    event.preventDefault();
    switch (currency.value) {

        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break

    }

};

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {

    try {

        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        if (isNaN(amount)) {

            return alert("Por favor, digite o número corretamente")

        }

        // Exibe o resultado total formatado
        result.textContent = `${formatCurrencyBRL((amount * price)).replace("R$", "")} Reais`

        // Aplica a classe no HTML que exibe o footer na tela
        footer.classList.add("show-result")

    } catch (error) {

        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter")

    }

}

// Formata a moeda para Real Brasileiro
function formatCurrencyBRL (value) {

    // Converte o valor para número para utilizar o toLocaleString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {

        style: "currency",
        currency: "BRL",

    })

}
