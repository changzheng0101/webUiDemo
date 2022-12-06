const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generator')
const clipboardEl = document.getElementById('clipboard')

const randomFunc= {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click',(e)=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    
    resultEl.innerText = generateRandomText(length,hasLower,hasUpper,hasNumber,hasSymbol)
})

clipboardEl.addEventListener('click',async ()=>{
    const password = resultEl.innerText
    if (!password) {
        return
    }

    await parent.navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
})

function generateRandomText(length,lower,upper,number,symbol){
    let password = ''
    const Func = {}
    const typeCount = lower+upper+number+symbol
    const typeArr = [{lower},{upper},{number},{symbol}].forEach((item,idx) =>{
       if(Object.values(item)[0]){
            Func[Object.keys(item)] = randomFunc[Object.keys(item)]
       }
    })
    if (Object.values(Func).length === 0) {
        return ''
    }
    for(let i=0;i<length;i++){
        const idx = Math.floor(Math.random() * typeCount)
        const FuncName = Object.values(Func)[idx]
        password+= FuncName()
    }

    return password;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}