import Address from './Address.js';
import Shipping from './Shipping.js'
import CreditCard from './CreditCard.js'

export default function Steps() {
    return (
        <section className="step-container">
            {/* show one of the steps at once*/}
            {/* <Address />
            <Shipping /> */}
            <CreditCard />
        </section>
    )
}
