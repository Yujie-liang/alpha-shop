import Address from './Address.js';
import Shipping from './Shipping.js'
import CreditCard from './CreditCard.js'
import styles from './Steps.module.scss';
export default function Steps() {
    return (
        <section className="step-container">
            {/* pick one the step is on */}
            {/* <Address />
            <Shipping /> */}
            <CreditCard />
        </section>
    )
}