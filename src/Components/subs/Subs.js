import { useSelector } from "react-redux";
import Sub from "./Sub";
import { selectSubs } from "./subsSlice";


export default function Subs() {
    const subs = useSelector(selectSubs);

    return (
        <div>
            <h1>I'm the subs you're subscribed to!</h1>
            <Sub />
        </div>

    )
}
