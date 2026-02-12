//two sum problem

const numberIndexes = (nums,target) => {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] + nums[i] === target){
                return [i,j]
            }
        }
    }
    return []
}

const result = numberIndexes([1,2,3,4,5,6],11)
console.log(result)