import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectInfo } from "../../utils/selectors"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { updateUsername } from "../../features/usernameReducer"
import './Welcome.scss'

export default function Welcome(){
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [username, setUsername] = useState()
    const data = useSelector(selectInfo)

    function handleSubmit(e, username){
        e.preventDefault()
        dispatch(updateUsername(username))
    }

    return edit ? (
        <div className="welcome">
            <h1>Edit user info</h1>
            <form onSubmit={(e) => handleSubmit(e, username)}>
                <Input label="username"
                       value={data.userName} 
                       divClass="input-user"
                       onChange={(e) => setUsername(e.target.value)} />
                <Input id="first-name"
                       value={data.firstName}
                       divClass="input-user">
                First name
                </Input>
                <Input id="last-name"
                       value={data.lastName}
                       divClass="input-user">
                Last name
                </Input>
                <div className="welcome-btns">
                    <Button type="save" />
                    <Button onClick={() => setEdit(false)}>Cancel</Button>
                </div>
            </form>
        </div>
    ) : (
        <div className="welcome">
            <h1>Welcome back<br />{data.firstName} {data.lastName}!</h1>
            <Button onClick={() => setEdit(true)}>Edit name</Button>
        </div>
    )
}