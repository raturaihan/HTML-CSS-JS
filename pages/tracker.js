const add = () => {
    let parent = document.getElementById("history")
    let inputDetail = document.getElementById("input-details")
    let inputAmount = document.getElementById("input-amount")

    if (inputAmount.value === 0){
        return
    }

    let historyDetails = document.getElementById("history-details")
    let historyAmount = document.getElementById("history-amount")
    document.getElementById("history-details").innerHTML = inputDetail.value;
    historyAmount.innerHTML = inputAmount.value;

    parent.appendChild(historyDetails);
    inputAmount.value = 0;
    inputDetail.value = "";
}