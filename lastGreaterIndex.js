
let arr=[100,80,60,70,60,75,85]

function lastGreaterElement(arr){
let stack=[]
let ans=new Array(arr.length)
for(let i=0;i<arr.length;i++){
    if(stack.length===0){
        ans[i]=1
    }else if(arr[stack[stack.length-1]]>arr[i]){
        ans[i]=i - stack[stack.length-1]
    }else {
        //pop the element until it is empty or it is greater
        while(stack.length>0 && arr[stack[stack.length-1]]<arr[i]){
            stack.pop()
        }
        if(stack.length===0){
            ans[i]=1
        }else{
            ans[i]=i - stack[stack.length-1]
        }
    }
    stack.push(i)
}

console.log(ans) // arr=[100,80,60,70,60,75,85]  ans= [1,1,1,2,1,4,6]
}
lastGreaterElement(arr)