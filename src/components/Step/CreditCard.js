import {FormInput, FormRow, StepFrame} from './StepComponents';
 export default function CreditCard() {
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
        />
      </FormRow>
      <FormRow>
        <FormInput
          lg="4"
          sm="full"
          label="卡號"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
      </FormRow>
      <FormRow>
        <FormInput
          lg="3"
          sm="s3"
          label="有效期限"
          type="text"
          placeholder="MM/YY"
        />
        <FormInput
          lg="3"
          sm="s3"
          label="CVC / CCV"
          type="number"
          placeholder="123"
        />
      </FormRow>
    </StepFrame>
    )
 }

 <form class="col col-12" data-phase="credit-card">
    <h3 class="form-title">付款資訊</h3>
    <section class="form-body col col-12">
    <div class="col col-12">
        <div class="input-group input-w-lg-4 input-w-sm-full">
        <div class="input-label">持卡人姓名</div>
        <input type="text" placeholder="John Doe" />
        </div>
    </div>
    <div class="col col-12">
        <div class="input-group input-w-lg-4 input-w-sm-full">
        <div class="input-label">卡號</div>
        <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
    </div>
    <div class="col col-12">
        <div class="input-group input-w-lg-3 input-w-sm-s3">
        <div class="input-label">有效期限</div>
        <input type="text" placeholder="MM/YY" />
        </div>
        <div class="input-group input-w-lg-3 input-w-sm-s3">
        <div class="input-label">CVC / CCV</div>
        <input type="text" placeholder="123" />
        </div>
    </div>
    </section>
</form>