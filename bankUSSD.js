let id = Number(prompt("Access Bank\n1>Check Balance\n2>Transfers\n3>Airtime"));


// for the first option
if (id === 1){
    alert("Your account balance is empty,\nMake Sapa no kill you")
} else if (id === 2){
    let accountNumber = Number(prompt("Enter your account number please: "));

    let amount = Number(prompt("Enter amount: "))

    let pin = Number(prompt("Enter you pin to confirm transaction"));

    if (pin <= 9999){
        alert(`#${amount} was just sent to ${accountNumber}`)
    }
    else{
        alert("You have entered an invalid pin")
    }
} else if (id === 3){
    let airtime = prompt("1>Airtime-Self\n2>Airtime-Others");

    if (airtime === 1){
        let airtimeAmountSelf = Number(prompt("Enter amount: "))
        alert(`#${airtimeAmountSelf} has been sent to your number.`)
    } else {
        let airtimeAmountOthers = Number(prompt("Enter amount: "));
        let airtimeNumber = Number(prompt("Enter Phone Number: "));

        alert(`#${airtimeAmountOthers} has been sent to ${airtimeNumber}`);
    }
}

