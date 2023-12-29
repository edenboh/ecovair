
import {metadata} from "next";

//les métadonnées peuvent se référer aux informations associées à une page web,
export async function generateMetadata({params}) {
    // read route params
   const idProduc = params.id

   //si on utilise une methode asynchrone
    const title = await new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`iphone ${idProduc}`);
        },100);
    })
//permet de mettre un titre a notre route
    return {
        title: `product ${title}`

    }
}
export default function ProduitDetail({ params }) {
    return <div><h1>Detail du produit {params.id}</h1>
     <p>avec id </p></div>
}
