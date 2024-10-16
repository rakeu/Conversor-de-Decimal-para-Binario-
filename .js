const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result"); 
//metodo utilizado para obter o elemento de entrada id armazenando o mesmo em uma variavel 

function decimalToBinary (input) {
    const inputs = [];
    const quotients = []; 
    const remainders = [];

    
    while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    inputs.push(input); //anexar o input ao array inputs
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient; 
    };
console.log("inputs: ", inputs);
console.log("Quotients: ", quotients);
console.log("Remainders: ", remainders);
remainders.reverse().join("");
result.innerText = "";   
};


const checkUserInput = () => {
if (!numberInput.value || //entrada numerica: verifica se o valor da entrada numerica for vazia 
    isNaN(parseInt(numberInput.value)) || 
    parseInt(numberInput.value) < 0
) { 
alert("Please provide a decimal number greater than or equal to 0"); 
return   
} 
decimalToBinary(parseInt(numberInput.value)); 
numberInput.value = "" 
}; 

convertBtn.addEventListener("click", checkUserInput); //funcionamento do botão convert 
numberInput.addEventListener('keydown', (e) => { //evento acionado sempre que usuario pressiona a tecla enter 
if (e.key === "Enter") { //executa uma ação quando a tecla "enter é pressionada"
checkUserInput()
}
});

