function romanToNumber(romanNumber) {
  if(romanNumber == 'I') {
    return 1
  } else if (romanNumber == 'V') {
    return 5
  } else if (romanNumber == null){
    return 0
  }
   else {
    return -1
  }
}
