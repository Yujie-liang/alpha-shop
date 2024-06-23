

import Address from './Address';
import Shipping from './Shipping'
import CreditCard from './CreditCard'

export default function Steps({ step }) {

    return (
        <section className="step-container">
            {/*show one of the steps at once*/}
            {step === 1 && <Address />}
            {step === 2 && <Shipping />}
            {step === 3 && <CreditCard />}
        </section>
    )
}
