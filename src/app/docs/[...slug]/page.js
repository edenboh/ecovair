export default function Docs({ params }) {
    if (params.slug.length === 2) {
        return <h1>feature {params.slug[0]}</h1>;
    } else if (params.slug.length === 1) {
        return <h1>feature {params.slug[0]}</h1>;
    }

    // Ajoutez un retour par défaut si nécessaire
    return null;
}
