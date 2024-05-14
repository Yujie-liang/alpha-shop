import styles from './Address.module.scss';

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
function width(lg, sm) {
  return (
    `input-w-lg-${lg} input-w-sm-${sm}`
  )
}

function FromInput({ lg, sm, label, type, placeholder }) {
  return (
    <div className={`${styles.inputGroup} ${width(lg, sm)}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )
}
function FormSelect({ lg, sm, label, required, options }) {
  return (
    <div className={`${styles.inputGroup} ${width(lg, sm)}`}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.selectContainer}>
        <select className={`${styles.input} ${styles.select}`} required={required}>
          {options.map((option) => (
            <option className={styles.option} value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

function StepFrame({ dataPhase, formTitle, children }) {
  return (
    <form className={styles.formContainer} data-phase={dataPhase}>
      <h3 className={styles.formTitle}>{formTitle}</h3>
      <section className={`{styles.formBody} col col-12`}>
        {children}
      </section>
    </form>
  )
}
export default function Step1() {
  return (
    <StepFrame
      dataPhase="address"
      formTitle="寄送地址"
    >
      <div className={`${styles.formRow} col col-12`}>
        <FormSelect
          lg="2"
          sm="s1"
          label="稱謂"
          options={titleOptions}
          required={false}
        />
        <FromInput
          lg="4"
          sm="s2"
          label="姓名"
          type="text"
          placeholder="請輸入姓名"
        />
      </div>
      <div className={`${styles.formRow} col col-12`}>
        <FromInput
          lg="3"
          sm="full"
          label="電話"
          type="tel"
          placeholder="請輸入行動電話"
        />
        <FromInput
          lg="3"
          sm="full"
          label="Email"
          type="email"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div className={`${styles.formRow} col col-12`}>
        <FormSelect
          lg="2"
          sm="full"
          label="縣市"
          options={cityOptions}
          required={true}
        />
        <FromInput
          lg="4"
          sm="full"
          label="地址"
          type="text"
          placeholder="請輸入地址"
        />
      </div>
    </StepFrame>
  )
}


// <form class="col col-12" data-phase="address">
//   <h3 class="form-title">寄送地址</h3>
//   <section class="form-body col col-12">
//     <div class="col col-12">
//       <div class="input-group input-w-lg-2 input-w-sm-s1">
//         <div class="input-label">稱謂</div>
//         <div class="select-container">
//           <select>
//             <option value="mr" selected>先生</option>
//             <option value="ms">女士</option>
//             <option value="mx">不明</option>
//           </select>
//         </div>
//       </div>
//       <div class="input-group input-w-lg-4 input-w-sm-s2">
//         <div class="input-label">姓名</div>
//         <input type="text" placeholder="請輸入姓名" />
//       </div>
//     </div>
//     <div class="col col-12">
//       <div class="input-group input-w-lg-3 input-w-sm-full">
//         <div class="input-label">電話</div>
//         <input type="tel" placeholder="請輸入行動電話" />
//       </div>
//       <div class="input-group input-w-lg-3 input-w-sm-full">
//         <div class="input-label">Email</div>
//         <input type="email" placeholder="請輸入電子郵件" />
//       </div>
//     </div>
//     <div class="col col-12">
//       <div class="input-group input-w-lg-2 input-w-sm-full">
//         <div class="input-label">縣市</div>
//         <div class="select-container">
//           <select required>
//             <option value="">請選擇縣市</option>
//             <option value="KLU">基隆市</option>
//             <option value="TPH">新北市</option>
//             <option value="TPE">臺北市</option>
//             <option value="TYC">桃園市</option>
//             <option value="HSH">新竹縣</option>
//             <option value="HSC">新竹市</option>
//             <option value="MAC">苗栗市</option>
//             <option value="MAL">苗栗縣</option>
//             <option value="TXG">臺中市</option>
//             <option value="CWH">彰化縣</option>
//             <option value="CWS">彰化市</option>
//             <option value="NTC">南投市</option>
//             <option value="NTO">南投縣</option>
//             <option value="YLH">雲林縣</option>
//             <option value="CHY">嘉義縣</option>
//             <option value="CYI">嘉義市</option>
//             <option value="TNN">臺南市</option>
//             <option value="KHH">高雄市</option>
//             <option value="IUH">屏東縣</option>
//             <option value="PTS">屏東市</option>
//             <option value="ILN">宜蘭縣</option>
//             <option value="ILC">宜蘭市</option>
//             <option value="HWA">花蓮縣</option>
//             <option value="HWC">花蓮市</option>
//             <option value="TTC">臺東市</option>
//             <option value="TTT">臺東縣</option>
//             <option value="PEH">澎湖縣</option>
//             <option value="KMN">金門縣</option>
//             <option value="LNN">連江縣</option>
//           </select>
//         </div>
//       </div>
//       <div class="input-group input-w-lg-4 input-w-sm-full">
//         <div class="input-label">地址</div>
//         <input type="text" placeholder="請輸入地址" />
//       </div>
//     </div>
//   </section>
// </form>