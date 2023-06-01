import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Welcome from "../../components/Welcome/Welcome"
import { getProfile } from "../../features/profileReducer"

export default function User(){
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <Welcome />
                <h2 className="sr-only">Accounts</h2>

            </main>
            <Footer />
        </>
    )
}