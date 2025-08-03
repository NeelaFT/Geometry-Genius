function getInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}