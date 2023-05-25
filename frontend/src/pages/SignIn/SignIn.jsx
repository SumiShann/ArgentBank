import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import "./SignIn.scss"

export default function SignIn(){
    return(
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <Input label="username" />
                        <Input label="password" />
                        <Input label="after"
                               divClass="input-remember"
                               type="checkbox"
                               id="remember-me"
                        >Remember me</Input>
                        <Button type="login"/>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}