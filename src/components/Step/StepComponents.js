import styles from './Address.module.scss';


function width(lg, sm) {
  return (
    `input-w-lg-${lg} input-w-sm-${sm}`
  )
}

export function FormInput({ lg, sm, label, type, placeholder }) {
  return (
    <div className={`${styles.inputGroup} ${width(lg, sm)}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input className={styles.input} type={type} placeholder={placeholder} />
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
            <option className={styles.option} value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export function StepFrame({ dataPhase, formTitle, children }) {
  return (
    <form className={styles.formContainer} data-phase={dataPhase}>
      <h3 className={styles.formTitle}>{formTitle}</h3>
      <section className={`{styles.formBody} col col-12`}>
        {children}
      </section>
    </form>
  )
}