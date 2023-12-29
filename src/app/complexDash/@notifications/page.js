


import Card from "../../../components/card";
import Link from "next/link"

export default function Notification()
{
    return(
        <>
        <Card>
            <div>hello notif </div>
            <Link href={"/complexDash/archived"}>archived</Link>
        </Card></>
    )
}