const dico = {
    'I' : 1,
    'V' : 5,
    'X' : 10
}

function romanToNumber(romanNumber) {

    if (romanNumber == null){
        return 0
    }
    if (!Object.keys(dico).includes(romanNumber)) {
        return -1
    } 

    return dico[romanNumber]
    
}
