import './Button.scss'

export default function Button({ type, onClick, children }){
    switch (type) {
        case "login":
            return (
                <button
                    className="button button-sign-in"
                    onClick={onClick}
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