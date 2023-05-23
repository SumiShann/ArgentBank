import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import "./Header.scss"

export default function Header(){
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
                    <NavLink className="nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}