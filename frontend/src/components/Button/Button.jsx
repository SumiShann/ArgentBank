import './Button.scss'
import { useNavigate } from 'react-router-dom'

export default function Button({ type, onClick, children }){
    const navigate = useNavigate()
    switch (type) {
        case "login":
            return (
                <button
                    className="button button-sign-in"
                    onClick={() => navigate("/user") }
                >Sign In</button>
            )
        case "save":
            return (
                <button
                    className='button button-edit'
                >Save</button>
            )
        case "account":
            return (
                <button
                    className='button button-transaction'
                >View transactions</button>
            )
        default:
            return (
                <button
                className='button button-edit'
                onClick={onClick}
                >{children}</button>
            )
    }
}