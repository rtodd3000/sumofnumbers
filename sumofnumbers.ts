function sumFor(nums: number[]): number{
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}

function sumWhile(nums: number[]): number{
    let i = 0;
    let total = 0;
    while(i < nums.length){
        total += nums[i];
        i++;
    }
    return total;
}

function sumRecursion(nums: number[]): number{
    if(nums.length === 0){
        return 0;
    }
    else{
        return nums[0] + sumRecursion(nums.slice(1));
    }
}

function sumTheFunctionalWay(nums: number[]):number{
    return nums.reduce((acc, curr) => acc + curr, 0);
}

const numArray = [1 , 2, 3, 4, 5];

console.log(sumFor(numArray));
console.log(sumWhile(numArray));
console.log(sumRecursion(numArray));
console.log(sumTheFunctionalWay(numArray));