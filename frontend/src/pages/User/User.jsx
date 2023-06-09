import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Welcome from "../../components/Welcome/Welcome"
import Account from "../../components/Account/Account"
import accounts from "../../data/accountData"

export default function User(){
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <Welcome />
                <h2 className="sr-only">Accounts</h2>
                {accounts.map(elt => 
                    <Account key={elt.title} title={elt.title} amount={elt.amount} desc={elt.desc} />)}
            </main>
            <Footer />
        </>
    )
}