import styles from './ProgressControl.module.scss';
import{ useContext } from 'react';
import { FormContext } from '../../FormContext';
import { CartContext } from '../../CartContext';
function Button({ direction, text, iconUrl, onClick }) {
  const btnStyle = direction === "next" ? styles.btnNext : styles.btnPrev;
  return (
    <button className={`${styles.button} ${btnStyle}`} onClick={onClick}>
      {text}
      <img src={iconUrl} alt="arrow" className={styles.arrow}>
      </img>
    </button>
  )
}

function ButtonGroup({ dataPhase, children }) {
  return (
    <section className={`${styles.buttonGroup} col col-12`} data-phase={dataPhase}>
      {children}
    </section>
  )
}


export default function ProgressControl({step, handleStep}) {
  const {formState} = useContext(FormContext);
  const {total} = useContext(CartContext);

  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      {step === 1 && 
        <ButtonGroup
          dataPhase="address"
        >
          <Button
            direction="next"
            text="下一步"
            iconUrl="/icons/right-arrow.svg"
            onClick={(e)=>handleStep(e, 'next')}
          />
        </ButtonGroup>
      }
      {step === 2 && 
        <ButtonGroup
          dataPhase="shipping"
        >
          <Button
            direction="prev"
            text="上一步"
            iconUrl="/icons/left-arrow.svg"
            onClick={(e)=>handleStep(e, 'prev')}
          />
          <Button
            direction="next"
            text="下一步"
            iconUrl="/icons/right-arrow.svg"
            onClick={(e)=>handleStep(e, 'next')}
          />
        </ButtonGroup>
      }
      {step === 3 &&
        <ButtonGroup
          dataPhase="credit-card"
        >
          <Button
            direction="prev"
            text="上一步"
            iconUrl="/icons/left-arrow.svg"
            onClick={(e)=>handleStep(e, 'prev')}
          />
          <Button
            direction="next"
            text="確認下單"
            iconUrl="/icons/right-arrow.svg"
            onClick={()=>console.log(`Form State: ${JSON.stringify(formState)} Total: ${total}`)}
          />
        </ButtonGroup>
      }
    </section>
  )
}