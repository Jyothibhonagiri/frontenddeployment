
import {useEffect,useState} from "react"
function Task() {
    const [list,setList] = useState([])

    useEffect(() => {
        fetch("http://localhost:7000/item/list").then(function (res) {
            return res.json();
        }).then(function (result) {
            setList(result)
        })


    }, [])
    return (
        <div>
            {list.map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}
    

export default Task