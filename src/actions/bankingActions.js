export const deposit = (amount)=>{
return{
    type:"DEPOSIT",
    amount:amount
}
}
export const withdraw = (amount)=>{
    return{
        type:"WITHDRAW",
        amount:amount
    }
}
export const collectInterest = ()=>{
    return {type:'COLLECT_INTEREST'}
}
export const deleteAcc=()=>{
    return {type:'DELETE_ACCOUNT'}
}
export const isSavingsAccount = ()=>{
    return {type:'TOGGLE_ACCOUNT'}
}
    