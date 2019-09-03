'use strict'

function Insurance(brand, year, type) {
  this.brand = brand
  this.year = year
  this.type = type
}

Insurance.prototype.insuranceQuote = function() {
  // console.log(this.brand)
  // console.log(this.year)
  // console.log(this.type)

  let quantity
  const base = 2000

  switch(this.brand) {
    case '1':
      quantity = base * 1.15
      break
    case '2':
      quantity = base * 1.05
      break
    case '3':
      quantity = base * 1.35
      break
  }
  console.log(quantity)

  // Read the year
  const difference = new Date().getFullYear() - this.year
  console.log(difference)
  
  //Each year of difference, the insurance value must be reduced by 3%
  quantity -= ((difference * 3) * quantity) / 100
  console.log(quantity)
  
  // If the insurance is basic, it is multiplied by 30% more
  // If the insurance is complete, it is multiplied by 50% more
  if(this.type === 'basic') {
    quantity *= 1.30 
  } else {
    quantity *= 1.50 
  }
  console.log(quantity)
  return quantity

}


// Everything shown
function Interfaz() {
}

// Message that is printed in the HTML
Interfaz.prototype.showError = function(message, type) {
  const div = document.createElement('div')
  if(type === 'error'){
    div.classList.add('message','error')
  } else {
    div.classList = 'correct'
  }
  div.innerHTML = `${message}`
  form.insertBefore(div, document.querySelector('.form-group'))

  setTimeout(function(){
    document.querySelector('.message').remove()
  }, 3000)
}

// Show the quotation of result
Interfaz.prototype.showResult = function(insurance, total) {
  const result = document.getElementById('result')
  let brand
  switch(insurance.brand) {
    case '1':
      brand = 'Americano'
      break
    case '2':
      brand = 'Asiatica'
      break
    case '3':
      brand = 'Europeo'
      break
  }
  console.log(brand)
}

//EventListeners
const form = document.getElementById('quote-insurance')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log('presionando')
  
  // Read the selected brand
  const brand = document.getElementById('brand')
  const selectBrand = brand.options[brand.selectedIndex].value
  console.log(selectBrand)
  
  // Read the year selected
  const year = document.getElementById('year')
  const selectYear = year.options[year.selectedIndex].value
  console.log(selectYear)

  // Read the value of radio button
  const type = document.querySelector('input[name="type"]:checked').value
  console.log(type)

  // Create interface request
  const interfaz = new Interfaz()

  // Check that the fields are not empty
  if(selectBrand === '' || selectYear === '' || type === '') {
    interfaz.showError('Faltan datos, revisa el formulario y pruba de nuevo', 'error')
  } else {
    // Request insurance and show interface
    const insurance = new Insurance(selectBrand, selectYear, type)

    // Quote the insurance
    const quantity = insurance.insuranceQuote()
    interfaz.showResult(insurance, quantity)
  }
})


// Create years list
const max = new Date().getFullYear()
const min = max - 20

console.log(max)
console.log(min)

const selectYears = document.getElementById('year')
for(let i = max; i >= min; i--) {
  let option = document.createElement('option')
  option.value = i
  option.innerHTML = i
  selectYears.appendChild(option)
}