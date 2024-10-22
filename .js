const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result"); 
//metodo utilizado para obter o elemento de entrada id armazenando o mesmo em uma variavel 

const decimalToBinary = (input) => {
if (input === 0 || input === 1) {
    return (String(input));
} else {
   return decimalToBinary(Math.floor(input/2)) + (input % 2); 
}
}

const showAnimation = () => {
if (parseInt(numberInput.value === 5)) {}
}

const checkUserInput = () => {
if (!numberInput.value || //entrada numerica: verifica se o valor da entrada numerica for vazia 
    isNaN(parseInt(numberInput.value)) || 
    parseInt(numberInput.value) < 0
) { 
alert("Please provide a decimal number greater than or equal to 0"); 
return   
} 
decimalToBinary(parseInt(numberInput.value)); 
result.textContent = decimalToBinary()
numberInput.value = "" 
}; 

convertBtn.addEventListener("click", checkUserInput); //funcionamento do botão convert 
numberInput.addEventListener('keydown', (e) => { //evento acionado sempre que usuario pressiona a tecla enter 
if (e.key === "Enter") { //executa uma ação quando a tecla "enter é pressionada"
checkUserInput()
}
});

