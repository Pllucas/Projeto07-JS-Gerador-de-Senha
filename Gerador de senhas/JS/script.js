// Seleção de elementos 
const generatePass = document.querySelector("#open-generate-password");

const generatedPasswordElement = document.querySelector("#generated-password");

// Seleção de elementos após rafatoração
const openCloseGeneratorButton = document.querySelector("#open-generate-pass");
const generatePasswordContainer = document.querySelector("#generation-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const btnCopyPassword = document.querySelector("#copy-password");


//Funções 
const getLetterLowerCase = () => {
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

};

const getLetterUpperCase = () => {
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

};

const getNumber = () => {
    return Math.floor(Math.random() * 11).toString() 
};

const getSymbol = () => {
    const symbols = "!@#$%¨&*(){}[]'|/;:?-+"

    return symbols[Math.floor(Math.random() * symbols.length) ];

};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    
    
    let password = "";
    /*
    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ]
    */

    // Após refatoração

    const passwordLength = lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase,getLetterUpperCase)
    }

    if (numbersInput.checked) {
        generators.push(getNumber)
    }

    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }

    if (generators.length === 0) {
        return
    }
        console.log(generators.length)

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;

        
        });
        
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

// Eventos
generatePass.addEventListener("click", (e) => {
    e.preventDefault();


    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol);

});


//Nova parte do projeto

// Eventos 
openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});


btnCopyPassword.addEventListener("click", (e) =>{
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerHTML;
    
    navigator.clipboard.writeText(password).then(function (){
        btnCopyPassword.innerHTML = "Senha copiada com sucesso!";

        setTimeout(() => {
            btnCopyPassword.innerHTML = "Copiar";
        }, 1500);
    })
})


