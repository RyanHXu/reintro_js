let res=[1,2,3,4,5,6]
let res2= res.map((item,index)=>{
    if(index>3){
        return item
    }
})

console.log(res2)


console.log(res.map(item=>{
    return 0
}))
