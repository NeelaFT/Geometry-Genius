/*
*step1: when button is clicked, get the base value first.
*/
function triangleAreaCal(){
    //get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value; //bydefault the value return from an input field is in string
    const triangleBaseNum = parseFloat(triangleBaseText);
    
    //get triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const triangleHeightNum = parseFloat(triangleHeightText);
    
    //Area Calculation
    const triangleArea = 0.5*triangleBaseNum*triangleHeightNum;
    //display Area
    const area = document.getElementById('triangle-area');
    area.innerText = triangleArea;

}