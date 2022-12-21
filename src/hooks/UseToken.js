import { useEffect, useState } from "react"

const UseToken =(email)=>{
    const [token,settoken] = useState('');

    useEffect(()=>{
        if(email){
            fetch(`https://doctors-protal-server-eight.vercel.app/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.acessToken){
                    localStorage.setItem('token', data.acessToken)
                    settoken(data.acessToken)
                }
            })
        }      
    },[email])
    return [token]
}

export default UseToken