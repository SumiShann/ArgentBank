import './Button.scss'
import { useNavigate } from 'react-router-dom'

export default function Button({ type, onClick, children }){
    const navigate = useNavigate()
    switch (type) {
        case "login":
            return (
                <button
                    className="sign-in-button"
                    onClick={() => navigate("/user") }
                >Sign In</button>
            )
        case "save":
            return (
                <button
                    className='edit-button'
                >Save</button>
            )
        default:
            return (
                <button
                className='edit-button'
                onClick={onClick}
                >{children}</button>
            )
    }
}