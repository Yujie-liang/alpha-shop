
import { FormInput, FormRow, FormSelect, StepFrame } from './StepComponents';

const titleOptions = [
  { value: "mr", text: "先生" },
  { value: "ms", text: "女士" },
  { value: "mx", text: "不明" }
]
const cityOptions = [
  { value: "", text: "請選擇縣市" },
  { value: "KLU", text: "基隆市" },
  { value: "TPH", text: "新北市" },
  { value: "TPE", text: "臺北市" },
  { value: "TYC", text: "桃園市" },
  { value: "HSH", text: "新竹縣" },
  { value: "HSC", text: "新竹市" },
  { value: "MAC", text: "苗栗市" },
  { value: "MAL", text: "苗栗縣" },
  { value: "TXG", text: "臺中市" },
  { value: "CWH", text: "彰化縣" },
  { value: "CWS", text: "彰化市" },
  { value: "NTC", text: "南投市" },
  { value: "NTO", text: "南投縣" },
  { value: "YLH", text: "雲林縣" },
  { value: "CHY", text: "嘉義縣" },
  { value: "CYI", text: "嘉義市" },
  { value: "TNN", text: "臺南市" },
  { value: "KHH", text: "高雄市" },
  { value: "IUH", text: "屏東縣" },
  { value: "PTS", text: "屏東市" },
  { value: "ILN", text: "宜蘭縣" },
  { value: "ILC", text: "宜蘭市" },
  { value: "HWA", text: "花蓮縣" },
  { value: "HWC", text: "花蓮市" },
  { value: "TTC", text: "臺東市" },
  { value: "TTT", text: "臺東縣" },
  { value: "PEH", text: "澎湖縣" },
  { value: "KMN", text: "金門縣" },
  { value: "LNN", text: "連江縣" },
]

export default function Address() {
  return (
    <StepFrame
      dataPhase="address"
      formTitle="寄送地址"
    >
      <FormRow>
        <FormSelect
          lg="2"
          sm="s1"
          label="稱謂"
          options={titleOptions}
          required={false}
        />
        <FormInput
          lg="4"
          sm="s2"
          label="姓名"
          type="text"
          placeholder="請輸入姓名"
        />
      </FormRow>
      <FormRow>
        <FormInput
          lg="3"
          sm="full"
          label="電話"
          type="tel"
          placeholder="請輸入行動電話"
        />
        <FormInput
          lg="3"
          sm="full"
          label="Email"
          type="email"
          placeholder="請輸入電子郵件"
        />
      </FormRow>
      <FormRow>
        <FormSelect
          lg="2"
          sm="full"
          label="縣市"
          options={cityOptions}
          required={true}
        />
        <FormInput
          lg="4"
          sm="full"
          label="地址"
          type="text"
          placeholder="請輸入地址"
        />
      </FormRow>
    </StepFrame>
  )
}