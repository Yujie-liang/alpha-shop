import {FormInput, FormRow, StepFrame} from './StepComponents';
import { useContext } from 'react';
import { FormContext } from '../../FormContext';

 export default function CreditCard() {

  const {formState, updateField} = useContext(FormContext);
  function handleChange(e){
    const {name, value} = e.target;
    updateField(name, value);
  }
  return (
    <StepFrame
      dataPhase="credit-card"
      formTitle="付款資訊"
    >
      <FormRow>
        <FormInput
          lg="4"
          sm="full"
          label="持卡人姓名"
          type="text"
          placeholder="John Doe"
          value={formState.name}
          name='name'
          handleChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormInput
          lg="4"
          sm="full"
          label="卡號"
          type="text"
          placeholder="1111 2222 3333 4444"
          value={formState.cardNumber}
          name='cardNumber'
          handleChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormInput
          lg="3"
          sm="s3"
          label="有效期限"
          type="text"
          placeholder="MM/YY"
          value={formState.exp}
          name='exp'
          handleChange={handleChange}
        />
        <FormInput
          lg="3"
          sm="s3"
          label="CVC / CCV"
          type="number"
          placeholder="123"
          value={formState.cvc}
          name='CVC'
          handleChange={handleChange}
        />
      </FormRow>
    </StepFrame>
    )
 }