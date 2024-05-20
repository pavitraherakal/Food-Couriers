import { sum } from "../sum"

test(" Sum function is for to calculate sum of 2 numbers",()=>{
const result=sum(3,6);
//assortion
 expect(result).toBe(9);
})