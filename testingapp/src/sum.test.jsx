
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
  });

// it and test both keywords are interchangable .They are alias.
// test("This is my first test",()=>{a
//     let data=10;
//     expect(data).toBe(10);
// })

// it("This is my first test",()=>{
//     let data=10;
//     expect(data).toBe(10);
// })

// it("This is my second test",()=>{
//     let data=12;
//     expect(data).toBe(10);
// })
// it("This is my third test",()=>{
//     let data=10;
//     expect(data).Not.toBe(14);
// })
