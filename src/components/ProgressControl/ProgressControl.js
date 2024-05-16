import styles from './ProgressControl.module.scss';

function Button({ direction, text, iconUrl }) {
  const btnStyle = direction === "next" ? styles.btnNext : styles.btnPrev;
  return (
    <button className={`${styles.button} ${btnStyle}`}>
      {text}
      <img src={iconUrl} alt="arrow" className={styles.arrow}>
      </img>
    </button>
  )
}
//上方div原本tag是object，object應該會指向下一頁，所以就變成了無限迴圈
function ButtonGroup({ dataPhase, children }) {
  return (
    <section className={`${styles.buttonGroup} col col-12`} data-phase={dataPhase}>
      {children}
    </section>
  )
}



export default function ProgressControl() {
  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <ButtonGroup
        dataPhase="address"
      >
        <Button
          direction="next"
          text="下一步"
          iconUrl="/icons/right-arrow.svg"
        />
      </ButtonGroup>
      
      <ButtonGroup
        dataPhase="shipping"
      >
        <Button
          direction="prev"
          text="上一步"
          iconUrl="/icons/left-arrow.svg"
        />
        <Button
          direction="next"
          text="下一步"
          iconUrl="/icons/right-arrow.svg"
        />
      </ButtonGroup>
      <ButtonGroup
        dataPhase="credit-card"
      >
        <Button
          direction="prev"
          text="上一步"
          iconUrl="/icons/left-arrow.svg"
        />
        <Button
          direction="next"
          text="確認下單"
          iconUrl="/icons/right-arrow.svg"
        />
      </ButtonGroup>
    </section>
  )
}