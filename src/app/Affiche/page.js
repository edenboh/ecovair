import Image from "next/image";
import Link from "next/link";
import wonder from "./wonders2";

export default function affichePag()

{
    return(

        <Link key={wonder.id} href={`/photo-feed/${wonder.id}`}>
            <Image
                alt={wonder.name}
                src={wonder.src}
                className="w-full object-cover aspect-square"
            />
        </Link>
    )
}
/* affichePag.js
import Image from "next/image";
import Link from "next/link";
import WondersImages from "./wonders2";

export default function AffichePage() {
    return (
        <>
            {WondersImages.map((wonder) => (
                <div key={wonder.id}>
                    <Link href={`/photo-feed/${wonder.id}`}>

                            <Image
                                alt={wonder.name}
                                src={wonder.src}
                                className="w-full object-cover aspect-square"
                            />

                    </Link>
                    <p>src.src</p>
                </div>
            ))}
        </>
    );
}
*/