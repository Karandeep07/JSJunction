//Controller function
//Get the values
function getValues(){
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("Enter Integers")
    }
}

//Logic function(s)
//Generate values from start to end
function generateNumbers(sValue, eValue){
    let numbers = [];
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);  
    }
    return numbers; 
}

//Display function
//Display even numbers in bold
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even"
        let number = numbers[index];
        if(number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows
}