
import { useSelector } from "react-redux"
import { loadSubPosts } from "../fetch/loadSubPosts"
import { selectSubs } from "../subs/subsSlice"

export default function Post() {
    const subs = useSelector(selectSubs)
    
    return (
        <div>
            <ul>
            {Object.values(subs).map((sub) => {
                const subChildren = loadSubPosts(sub);
                for (const subChild in subChildren) {
                    console.log(subChildren[subChild].data.title)
                    return (<li key={subChildren[subChild].data.id} >{subChildren[subChild].data.title}</li>)
                }
            })}

            </ul>
        </div>
    )
}


