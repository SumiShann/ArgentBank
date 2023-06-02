import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectToken, selectInfo } from "../../utils/selectors"
import argentBankLogo from "../../assets/argentBankLogo.png"
import * as tokenActions from "../../features/tokenReducer"
import * as profileActions from "../../features/profileReducer"
import "./Header.scss"

export default function Header(){
    const token = useSelector(selectToken)
    const data = useSelector(selectInfo)
    const dispatch = useDispatch()
    function logout(){
        dispatch(tokenActions.reset())
        dispatch(profileActions.reset())
    }
    return (
        <header>
            <nav className="nav">
                <NavLink className="nav-logo" to="/">
                    <img className="nav-logo-img"
                    src={argentBankLogo} 
                    alt="Argent Bank Logo"/>
                </NavLink>
                <div>
                    {token ?
                    <>
                    <NavLink className="nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {data.userName}
                    </NavLink>
                    <NavLink className="nav-item" to="/"
                            onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                    </>    
                    :
                    <NavLink className="nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}