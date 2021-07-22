const romanNumerals = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
}
const romanNumberLetters = Object.keys(romanNumerals);

function romanToNumber(romanNumber) {
  if (romanNumber == null){ return 0 }
  if (!isARomanNumber(romanNumber)) { return -1 }

  let number = 0
  for(let romanLetter of romanNumber) {
    number += romanNumerals[romanLetter]
  }
  return number
}

function isARomanNumber(romanNumber) {
  return !(romanNumber.split("").map(function(romanLetter){return isARomanLetter(romanLetter)}).includes(false))
/*
 |--|--------------------|--------------------------------------------------------------|---------------|
  4.          1.                                    2.                                          3.

  1. "IU" => ["I", "U"]
  2. ["I", "U"] => [true, false]
  3. [true, false] => true (contient au moins une lettre non romaine)
  4. true => false (s'il y a au moins une lettre non romaine dans la liste, alors ce n'est pas un nombre romain)
*/
}

function isARomanLetter(romanLetter) {
  return romanNumberLetters.includes(romanLetter)
}


function isARomanNumber_autre_facon_de_faire(romanNumber) {
  for(let letter of romanNumber) {
    // 1. "IU" => ["I", "U"]
    if( ! romanNumberLetters.includes(letter)){
      // 2. "I" => true
      //    "U" => false
      // 3. true => false, false => true
      return false
      // 4. return false si au moins une lettre n'est pas romaine
    }
  }

  return true
  // 4. return true si toutes les lettres sont romaine
}
