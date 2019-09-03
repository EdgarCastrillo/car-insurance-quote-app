'use strict'

function Insurance(brand, year, type) {
  this.brand = brand
  this.year = year
  this.type = type
}


// Everything shown
function Interface() {

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

  // Create interface instance
  const interface = new Interface()

  // Check that the fields are not empty
  
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