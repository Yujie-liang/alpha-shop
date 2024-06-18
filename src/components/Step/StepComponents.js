import styles from './StepComponents.module.scss';


function width(lg, sm) {
  return (
    `input-w-lg-${lg} input-w-sm-${sm}`
  )
}

export function FormInput({ lg, sm, label, type, name, value, placeholder, handleChange }) {
  
  return (
    <div className={`${styles.inputGroup} ${width(lg, sm)}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input className={styles.input} type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  )
}
export function FormSelect({ lg, sm, label, required, options }) {
  return (
    <div className={`${styles.inputGroup} ${width(lg, sm)}`}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.selectContainer}>
        <select className={`${styles.input} ${styles.select}`} required={required}>
          {options.map((option) => (
            <option className={styles.option} value={option.value} key={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
export function FormRadio({shippingType, text, period, price}){
    
    return(
        <label className={`${styles.radioGroup} col col-12`} data-price="0">
            <input id={shippingType} type="radio" name="shipping"/>
            <div className={styles.radioInfo}>
                <div className={`${styles.col} col col-12`}>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div className={`${styles.period} col col-12`}>{period}</div>
            </div>
            <div className={styles.radioBoxBorder}></div>
        </label>
    )
}

export function FormRow({children}){
    return(
        <div className={`${styles.formRow} col col-12`}>
            {children}
        </div>
    )
}
export function StepFrame({ dataPhase, formTitle, children }) {
  return (
    <form className={styles.formContainer} data-phase={dataPhase}>
      <h3 className={styles.formTitle}>{formTitle}</h3>
      <section className={`col col-12`}>
        {children}
      </section>
    </form>
  )
}
