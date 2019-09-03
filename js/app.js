'use strict'

function Insurance(brand, year, type) {
  this.brand = brand
  this.year = year
  this.type = type
}


// Everything shown
function Interface() {

}

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