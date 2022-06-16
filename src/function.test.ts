
const newF = require("./function"); 

test('test thing', async () => {
  let answer = await newF();
  expect(answer).toBe(4);
});