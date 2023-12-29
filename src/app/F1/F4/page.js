import Link from "next/link";


export default function F4()
{
    return(
        <>
            <h1>F4 page </h1>
            <div>
                <Link href={"/F1/F3"}>F3</Link>
                <Link href={"/about"}>About</Link>
                            </div>
        </>)

}
