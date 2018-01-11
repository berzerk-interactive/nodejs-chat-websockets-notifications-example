let multiply = require('../multiply');

describe('multiply module', ()=>{
  test('num * 2', ()=>{
    expect(multiply(2)).toBe(4)
  })
  test('num * 2', ()=>{
    expect(multiply(4)).toBe(8)
  })
})
