import WondersImages from "../wonders";
import Image from "next/image";

export default function photoPage({ id }) {

    const Photo = WondersImages.find((p) => p.id === id);
    // Vérification si Photo est défini
   if (!Photo)
    {
        return <div>Photo not found</div>;
    }

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{Photo.id}</h1>
                </div>
                <Image src={Photo.src} alt={Photo.name} className="w-full object-cover aspect-square" />
                <div className="bg-white py-4">
                    <h3>{Photo.photographe}</h3>
                    <h3>{Photo.location}</h3>
                </div>
            </div>
        </div>
    );
}
