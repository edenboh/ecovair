import Link from "next/link";
import Image from "next/image";
import WondersImages from "./wonders";

export default function photoPage() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                New Wonder of the world
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {WondersImages.map((wonder) => (
                 <> <p>${src.src}</p>
                    <Link key={wonder.id} href={`/photo-feed/${wonder.id}`}>
                        <Image
                            alt={wonder.name}
                            src={wonder.src}
                            className="w-full object-cover aspect-square"
                        />
                    </Link></>
                ))}
            </div>
        </main>
    );
}
