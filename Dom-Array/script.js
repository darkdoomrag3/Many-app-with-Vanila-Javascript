const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')


let data = [];


getRndomUsers()


//fetch usrs
async function getRndomUsers() {

    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    const user = data.results[0]

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser)

}


///add new object  to data arr


function addData(obj) {

    data.push(obj)
    updateDom()
}


///update DOM

function updateDom(providedData = data) {
    //clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
    providedData.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong> ${item.name} </strong>  ${formatMoney(item.money)}`
        main.appendChild(element)

    })


}


///format number as money

function formatMoney(number) {

    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}


///event listeners 

addUserBtn.addEventListener('click', getRndomUsers)







////// 5

