import Link from "next/link";
    export default function ProductList() {
        const productId=100
    return (
        <div>
            <h1>PRODUCT LISTE</h1>
            <h2><Link href={"products/1"}>produit 1</Link></h2>
            <h2><Link href={"products/2"}>produit 2</Link></h2>
            <h2><Link href={"products/3"} replace >produit 3</Link></h2>
            <h2><Link href={`products/${productId}`}>produit {productId}</Link></h2>
            <Link href={"/"}>retour</Link>

        </div>
    );
        //replace te ramere a la page d'acceuile
}

