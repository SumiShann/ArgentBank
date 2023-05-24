import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Feature from "../../components/Feature/Feature"
import features from "../../data/featureData"
import './Home.scss'

export default function Home(){
    return (
        <>
            <Header />
            <main>
                <div className="hero">
                    <section className="hero-content">
                      <h2 className="sr-only">Promoted Content</h2>
                      <p className="subtitle">No fees.</p>
                      <p className="subtitle">No minimum deposit.</p>
                      <p className="subtitle">High interest rates.</p>
                      <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {features.map(item =>
                        <Feature key={item.alt} src={item.src} alt={item.alt} title={item.title} desc={item.desc}/>)}
                </section>
            </main>
            <Footer />
        </>
    )
}