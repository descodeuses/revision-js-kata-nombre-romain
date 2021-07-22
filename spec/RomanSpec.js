describe("Roman", function() {
  describe("romanToNumber", function() {
    it("sans paramètre, la fonction renvoie 0", function() {
      expect(romanToNumber()).toEqual(0);
    });
    it("si le paramètre est I, la fonction renvoie 1 ", function() {
      expect(romanToNumber('I')).toEqual(1);
    });
    it("si le paramètre est V, la fonction renvoie 5", function(){
      expect(romanToNumber('V')).toEqual(5);
    });
    it("si le paramètre est invalid, la fonction renvoie -1", function(){
      expect(romanToNumber('invalid')).toEqual(-1);
    });
    it("si le paramètre est X, la fonction renvoie 10", function(){
      expect(romanToNumber('X')).toEqual(10);
    });

    // PENDING : spec permettant d'explorer le reste à faire pour que ce programme fonctionne
    it("si le paramètre est II, la fonction renvoie 2", function(){
      expect(romanToNumber('II')).toEqual(2);
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
  describe("romanToNumber", function() {
    it(" I est un nombre romain.", function(){
      expect(isARomanNumer('I')).toBe(true);
    });
    it(" II est un nombre romain.", function(){
      expect(isARomanNumer('II')).toBe(true);
    });
  });
});
