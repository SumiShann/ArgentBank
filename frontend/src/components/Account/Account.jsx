import Button from '../Button/Button'
import './Account.scss'

export default function({title, amount, desc}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{desc}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button type="account" />
            </div>
        </section>
    )
}