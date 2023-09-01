const buttonElement = document.querySelector('#operation b.Element');
const selectElement = document.querySelector('#typeOperation');
var operationSymbolType ='';

selectElement.addEventListener('change', function(event){
    operationSymbolType = selectElement.options[selectElement.selectedIndex].value;
    // console.log('event:', [selectElement.selectindex])
    // operatiopcionType = selectElement.options[selectElement,selectedscript1].value;
})
buttonElement.addEventListener('click', function (e){
    // console.log(e.target); 
    const cant1Element = document.getElementById('cant1');
    const cant1 = parseInt(cant1Element.value);
    let resultado = 0;
    console.log(operationSymbolType)
    console.log(cant1);
    var s = 1500;
    switch(operationSymbolType){
        case '+':
            result = cant1 + s;
        break;
        case'-':
            result = cant1 - s;
        breack;
        alert("el saldo actual es de", result)
    // const divResultElement = document.querySelector('#result');
    // divResultElement.innerHTML = result;
    }
  
    

})