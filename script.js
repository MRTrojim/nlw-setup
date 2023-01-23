const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) // quando clicar no button irá add a function
form.addEventListener("change", save) // essa setença serve para salvar o dia quando a pagina recarregar

function add() {
    
    const today = new Date().toLocaleDateString("pt-br").slice(0, -05) // essa setença serve para pegar o dia atual e recortar apenas em dia/mes

    const dayExists = nlwSetup.dayExists(today) // se o dia existir (dayExists)

    if(dayExists){
        alert("Dia já incluso ❗") // ele executa a função if e retorna a mensagem (dia ja incluso)
        return
    }

    alert("adicionado com sucesso ✅")
    nlwSetup.addDay(today)
}

function save() {
    console.log(nlwSetup.data)
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //json.stringfy transforma um objeto em string
}

/*const data = {
    run: ['01-01','01-02', '01-06', '01-07', '01-08'],
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'],
    takePills: ['01-03'],
    journal: ['01-02'],
}
*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // JSON.parse transforma uma string em objeto novamente 

nlwSetup.setData(data)
nlwSetup.load()