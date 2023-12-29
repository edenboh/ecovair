"use client"

function getRandomInt(count)
{
    return Math.floor(Math.random()*count);
}


export default function ProductReview({ productId, reviewId }) {
  // const ramdon= getRandomInt(2);
   //if (ramdon===1)
   //{
       //throw new Error("Error loading review");
   //}//soit on retourne comme ca mais c'est pas tres joli soit voir la page erro.js
    return (
        <div>

            <h1>Review {productId}for product {reviewId} </h1>
        </div>
    );
}