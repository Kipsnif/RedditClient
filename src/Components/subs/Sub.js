import { useSelector } from "react-redux"
import { selectSubs } from "./subsSlice"
import { removeSub } from "./subsSlice";
import { useDispatch } from "react-redux";

export default function Sub() {
    const subs = useSelector(selectSubs);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const targetValue = e.target.value

        dispatch(
            removeSub(targetValue)
        )
    }

    return (
        <div>
            <ul className="subList">
                {Object.values(subs).map((sub) => (
                    <div className="subList">
                        <li>{sub}</li>
                        <p onClick={handleClick}>-</p>
                    </div>

                ))}
            </ul>
        </div>
    )
}

