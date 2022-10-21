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
    let input = removeFormatting(inputAmount.value)

    updatePrice()

    if (input === "" && input === ""){
        return
    }
    borderclass = input > 0 ?'green':'red'
    historyList.setAttribute("class", `list-history list-group-item d-flex justify-content-between align-items-center my-2`)
    historyList.setAttribute("style", `border-right: 3px solid ${borderclass}`)
    historyList.innerHTML = 
    `<button class="delete-button">X</button>`+ 
    inputDetail.value + `<span class="mx-2">` + inputAmount.value + `</span>`

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

    balanceAmount.innerHTML = income - expense
}

let parent = document.getElementById("history")
parent.addEventListener("click", function(e){
    let balanceAmount = document.getElementById("price-balance")
    let incomeAmount = document.getElementById("price-income")
    let expenseAmount = document.getElementById("price-expense")
    let expense = removeFormatting(expenseAmount.innerHTML)
    let income = removeFormatting(incomeAmount.innerHTML)
    let total = removeFormatting(balanceAmount.innerHTML)

    if (e.target.tagName == "BUTTON") {
        e.target.parentNode.remove();
        let balance = e.target.parentNode.querySelector("span").innerHTML; 

        let minus = balance.includes("-")
    
        if (minus === true) {
            expense -= balance
            expenseAmount.innerHTML = expense
        } else {
            income -= balance
            incomeAmount.innerHTML = income
        }
    
        balanceAmount.innerHTML = (income-expense)
    }

})

