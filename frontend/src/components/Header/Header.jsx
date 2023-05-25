import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import "./Header.scss"

export default function Header(){
    const token = "jkdfkqd"
    return (
        <header>
            <nav className="nav">
                <NavLink className="nav-logo" to="/">
                    <img className="nav-logo-img"
                    src={argentBankLogo} 
                    alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {token ?
                    <>
                    <NavLink className="nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <NavLink className="nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                    </>    
                    :
                    <NavLink className="nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}