import WondersImages from "../wonders2";
import Image from "next/image";

export default function photoPage({ params }) {
const idPhoto=params.id;
   // const Photo = WondersImages.find((p) => p.id === idPhoto);
const photo=WondersImages;


//console.log(photo.name)

    //const { name, src, photographe, location } = Photo;
   return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                </div>
                <Image src={photo.src} alt={photo.name} className="w-full object-cover aspect-square" />
                <div className="bg-white py-4">
                    <h3>{photo.photographe}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div> )
}


/*
<div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
            <div>
             <h1 className="text-center text-3xl font-bold my-4">{params.name}</h1>
        </div>
         <Image src={params.src} alt={params.name} className="w-full object-cover aspect-square" />
         <div className="bg-white py-4">
        <h3>{params.photographe}</h3>
        <h3>{params.location}</h3>
         </div>
            </div>
        </div>
* */
