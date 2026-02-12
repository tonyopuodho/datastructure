//chunking array

const chunk = (array,size) => {
    const chunked = []
    let index = 0
    while (index < array.length){
        const chunck = array.slice(index,index + size)
        chunked.push(chunck)
        index += size
    }

    return chunked
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10],2))