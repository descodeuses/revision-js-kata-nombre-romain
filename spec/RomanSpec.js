describe("Roman", function() {

  describe("romanToNumber", function() {

    it("sans paramètre, la fonction renvoie 0", function() {
      expect(romanToNumber()).toEqual(0);
    });

    for (let romanLetter in romanNumerals) {
      let valeur = romanNumerals[romanLetter]
      it(`si le paramètre est ${romanLetter}, la fonction renvoie ${valeur}`, function(){
        expect(romanToNumber(romanLetter)).toEqual(valeur);
      });
    }

    it("si le paramètre est invalid, la fonction renvoie -1", function(){
      expect(romanToNumber('invalid')).toEqual(-1);
    });


    // PENDING : spec permettant d'explorer le reste à faire pour que ce programme fonctionne
    it("si le paramètre est II, la fonction renvoie 2", function(){
      expect(romanToNumber('II')).toEqual(2);
      pending()
    });

    it("si le paramètre est VI, la fonction renvoie 6", function(){
      expect(romanToNumber('VI')).toEqual(6);
      pending();
    });

    it("si le paramètre est IV, la fonction renvoie 4", function(){
      expect(romanToNumber('IV')).toEqual(4);
      pending();
    });

  });

  describe("isARomanNumber", function() {

    for (let letter of romanNumberLetters) {
      it(`${letter} est un nombre romain.`, function(){
        expect(isARomanNumber(letter)).toBe(true);
      });
    }

    it("II est un nombre romain.", function(){
      expect(isARomanNumber('II')).toBe(true);
    });

    it("IU n'est pas un nombre romain.", function(){
      expect(isARomanNumber('IU')).toBe(false);
    });

  });

});
