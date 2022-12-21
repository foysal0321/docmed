import { useEffect, useState } from "react"

function Useadmin (email){
    const [isadmin,setisadmn] = useState(false)
    const [adminLoding,setadminLoding] = useState(true)

    useEffect(()=>{
        fetch(`https://doctors-protal-server-eight.vercel.app/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data);
            setisadmn(data.isAdmin)
            setadminLoding(false)
        })
    },[email])
    return [isadmin, adminLoding]
}
export default Useadmin