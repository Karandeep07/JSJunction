function getValues(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    if (userString.length != 0) {
        let revString = reverseString(userString);
        displayString(revString);
    } else {
        alert("Enter a string")
    }
}

function reverseString(userString){
    let revString = [];
    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];  
    }
    return revString;
}

function displayString(revString){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}