// let arr=[1,2,3,4,3]
let arr=[8,5,2,1,7,9,3,6]

function lastGreaterElement(arr){
let stack=[]
let ans=new Array(arr.length)
for(let i=0;i<arr.length;i++){
    if(stack.length===0){
        ans[i]=-1
    }else if(stack[stack.length-1]>arr[i]){
        ans[i]=stack[stack.length-1]
    }else {
        //pop the element until it is empty or it is greater
        while(stack.length>0 && stack[stack.length-1]<arr[i]){
            stack.pop()
        }
        if(stack.length===0){
            ans[i]=-1
        }else{
            ans[i]=stack[stack.length-1]
        }
    }
    stack.push(arr[i])
}
// console.log(ans)// arr=[1,2,3,4,3]  ans= [-1,-1,-1,-1,4]
console.log(ans) // arr=[8,5,2,1,7,9,3,6]  ans= [-1,8,5,2,8,-1,9,9]
}
lastGreaterElement(arr)