"use client"
import {useRouter} from "next/navigation";

export default function orderProducts() {
    const router=useRouter()
   const handlerClick=()=>
   {
       console.log('placing your order')
      // router.push("/about");//envoi dans la route que je veux
     //  router.replace("/");//envoi a la page d'acceuil
       router.back();//retourne a la page précedent
router.forward()//retourne a la page suivante
   }
    return (
        <>

            <h1>Order products</h1>
            <button onClick={handlerClick}>Please order</button>


        </>
    )
}