const romanNumerals = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
}

function romanToNumber(romanNumber) {

  if (romanNumber == null){
    return 0
  }
  if (!isARomanNumer(romanNumber)) {
    return -1
  }
  return romanNumerals[romanNumber]
}

function isARomanNumer(romanNumber) {
  let romanNumberLetters = Object.keys(romanNumerals);

  for(let letter of romanNumber) {
    if(!romanNumberLetters.includes(letter)){
      return false
    }
  }

  return true
}
