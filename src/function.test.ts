let input : number = 5;

test("Function returns correct results", () => {
    expect(newF(input)).toBe(input*2);
})