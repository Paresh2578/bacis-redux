export const depositMeony = (amount)=>{
    return(dispatch)=>{
        dispatch({type:"deposit" , payload : amount})
    }
}

export const windroMeony = (amount)=>{
    return(dispatch)=>{
        dispatch({type:"windro" , payload : amount})
    }
}