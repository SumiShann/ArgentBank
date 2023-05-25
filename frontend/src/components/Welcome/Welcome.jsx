import { useState } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import './Welcome.scss'

export default function Welcome(){
    const [edit, setEdit] = useState(false)

    return edit ? (
        <div className="welcome">
            <h1>Edit user info</h1>
            <form>
                <Input label="username" 
                       divClass="input-user"/>
                <Input id="first-name"
                       value="Tony"
                       divClass="input-user">
                First name
                </Input>
                <Input id="last-name"
                       value="Jarvis"
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
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <Button onClick={() => setEdit(true)}>Edit name</Button>
        </div>
    )
}
