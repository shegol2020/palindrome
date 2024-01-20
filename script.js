const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    handleInput(input.value)
    input.value = ""; 
})

const handleInput = (value) => {
    const cleanedInputValue = cleanInputValue(value);
    
    if(!value){
        alert("Please input a value")
    } else {
        const checkResult = isPalindrome(cleanedInputValue);

        checkResult ? 
            (result.innerText = value + " is a palindrome") : 
            (result.innerText = value + " is not a palindrome");
        result.removeAttribute("hidden");
    }
}

const cleanInputValue = (value) => {
    const regex = /[^0-9a-zA-Z]/g
    return value.replace(regex, "")
}

const isPalindrome = (value) => {
    const symbolArray = value.toLowerCase().split("");
    let firstArray;
    let secondArray;
    if(value.length==1){
        return true
    }
    if(value.length%2!==0){ //odd
        const dividerIndex = Math.round(symbolArray.length/2)-1;
        firstArray = symbolArray.slice(0, dividerIndex);
        secondArray = symbolArray.slice(dividerIndex + 1);
    }
    if(value.length%2==0){ //even
        const dividerIndex = symbolArray.length/2;
        firstArray = symbolArray.slice(0, dividerIndex);
        secondArray = symbolArray.slice(dividerIndex);
    }
    if(firstArray.join("") === secondArray.reverse().join("")){
        return true
    } else {
        return false
    }
};