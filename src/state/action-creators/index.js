export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({              //dispatch bhi ek function hai
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({              //dispatch bhi ek function hai
            type:'withdraw',
            payload:amount
        })
    }
}