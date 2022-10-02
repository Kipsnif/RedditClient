import { useSelector } from "react-redux"
import { selectSubs } from "./subsSlice"
import { removeSub } from "./subsSlice";
import { useDispatch } from "react-redux";

export default function Sub() {
    const subs = useSelector(selectSubs);
    const dispatch = useDispatch();


    const handleClick = (e) => {
        e.preventDefault();

        const id = e.target.id;

        dispatch(
            removeSub(id)
        )
    }

    return (
        <div>
            <ul className="subList">
                {Object.entries(subs).map(([key, sub]) => (
                    <div className="subList">
                        <li >{sub}</li>
                        <button id={key} typeof="button" onClick={handleClick}>-</button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

