const removeFormatting = (displayString) => {
    cleanString = displayString.replace('.', '')
    intValue = parseInt(cleanString)
    return intValue
}

const addButtonClick = () => {
    let parent = document.getElementById("history")
    let historyList = document.createElement("li")
    let inputDetail = document.getElementById("input-details")
    let inputAmount = document.getElementById("input-amount")
    updatePrice()

    if (inputAmount.value === "" && inputDetail.value === ""){
        return
    }

    historyList.setAttribute("class", "list-group-item d-flex justify-content-between")
    historyList.setAttribute("style", "border-right: 3px solid black")
    historyList.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill hide" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
    </svg>`+ inputDetail.value + `<span class="mx-2">` + inputAmount.value + `</span>`

    parent.appendChild(historyList);
    inputAmount.value = "";
    inputDetail.value = "";
}

const updatePrice = () => {
    let inputAmount = document.getElementById("input-amount")
    let balanceAmount = document.getElementById("price-balance")
    let expenseAmount = document.getElementById("price-expense")
    let incomeAmount = document.getElementById("price-income")

    // Input Formatting (string to integer)
    let expense = removeFormatting(expenseAmount.innerHTML)
    let income = removeFormatting(incomeAmount.innerHTML)
    let input = removeFormatting(inputAmount.value)

    if (input < 0) {
        expense -= input
        expenseAmount.innerHTML = expense
    } else if (input > 0) {
        income += input
        incomeAmount.innerHTML = income
    }

    balanceAmount.innerHTML = (income - expense)
}

// document.getElementById("history").addEventListener("onclick", function(e){
//     e.target.
// })

