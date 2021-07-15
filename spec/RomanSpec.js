describe("Roman", function() {
  it("sans paramètre, la fonction renvoie 0", function() {
    expect(romanToNumber()).toEqual(0);
  });
  it("si le paramètre est I, la fonction renvoie 1 ", function() {
    expect(romanToNumber('I')).toEqual(1);
  });
});
