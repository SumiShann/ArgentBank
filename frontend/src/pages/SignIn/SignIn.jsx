import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Input from "../../components/Input/Input"
import "./SignIn.scss"

export default function SignIn(){
    return(
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Input label="username"/>
                    <Input label="before"
                           divClass="input-wrapper"
                           type="password"
                           id="password"
                    >Password</Input>
                    <Input label="after"
                           divClass="input-remember"
                           type="checkbox"
                           id="remember-me"
                    >Remember me</Input>
                </section>
            </main>
            <Footer />
        </>
    )
}