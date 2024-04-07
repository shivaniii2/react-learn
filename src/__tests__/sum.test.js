import sum from "../components/sum"
test('Sum function should calculate the sum', () => { 
    const result = sum(5,7);
    expect(result).toBe(12)
 })