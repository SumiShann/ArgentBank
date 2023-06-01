import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../../features/tokenReducer'
import { getProfile } from "../../features/profileReducer"
import { selectToken } from "../../utils/selectors"
import "./SignIn.scss"

export default function SignIn(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const token = useSelector(selectToken)
    function handleSubmit(e, email, password){
        e.preventDefault()
        dispatch(login(email, password))
    }
    useEffect(() => {
        if (token != null){
            navigate('/profile')
            dispatch(getProfile())
        }
        return
    }, [token])
    console.log(token)
    return(
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <Input label="username" onChange={(e) => setUsername(e.target.value)} />
                        <Input label="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Input label="after"
                               divClass="input-remember"
                               type="checkbox"
                               id="remember-me"
                        >Remember me</Input>
                        <Button type="login"
                                onClick={(e) => handleSubmit(e, username, password)}
                        />
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}