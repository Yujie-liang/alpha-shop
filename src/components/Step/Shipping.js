import { FormRadio, StepFrame } from './StepComponents';

export default function Shipping() {
    return (
        <StepFrame
            dataPhase="shipping"
            formTitle="運送方式"
        >
            <FormRadio
                shippingType="shipping-standard"
                text="標準運送"
                period="約 3~7 個工作天"
                price="免費"
            >
            </FormRadio>
            <FormRadio
                shippingType="shipping-dhl"
                text="DHL貨運"
                period="48 小時內送達"
                price="$500"
            >
            </FormRadio>
        </StepFrame>
    )
}