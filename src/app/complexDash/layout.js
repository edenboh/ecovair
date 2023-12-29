import Notification from "./@notifications/page";
import RevenueMetrics from "./@revenue/page";
import UsersAnalytics from "./@users/page";
import Login from "./@login/page";

export default function DashBoardLayout()
{
    const isLoggedIn=true;
    return isLoggedIn? (
    <div className={"grid grid-cols-3 gap-4"}>
        <Notification> </Notification>
        <RevenueMetrics></RevenueMetrics>
        <UsersAnalytics></UsersAnalytics>
    </div>):(<Login> </Login>)
}
//
//