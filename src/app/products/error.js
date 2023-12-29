
"use client"
export default function ErrorBoundary({error,reset})
{

    return <div>{error.message}  <button onChange={reset}>try again</button></div>
}
