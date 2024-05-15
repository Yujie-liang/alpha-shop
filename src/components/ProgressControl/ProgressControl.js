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
    <section className={`${styles.progressControlContainer} col col-lg-12 col-sm-12`}>
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

// < !--progress - control-- >
// < !--step1 -->
//   <section class="progress-control-container col col-lg-6 col-sm-12">
//     <section class="button-group col col-12" data-phase="address">
//       <button class="next">
//         下一步
//         <object data="./public/icons/right-arrow.svg" class="cursor-point">
//         </object>
//       </button>
//     </section>
//     <!-- step2 -->
//     <section class="button-group col col-12" data-phase="shipping">
//       <button class="prev">
//         <object data="./public/icons/left-arrow.svg" class="cursor-point">
//         </object>
//         上一步
//       </button>
//       <button class="next">
//         下一步
//         <object data="./public/icons/right-arrow.svg" class="cursor-point">
//         </object>
//       </button>
//     </section>
//     <!-- step3 -->
//     <section class="button-group col col-12" data-phase="credit-card">
//       <button class="prev">
//         <object data="./public/icons/left-arrow.svg" class="cursor-point">
//         </object>
//         上一步
//       </button>
//       <button class="next">
//         確認下單
//       </button>
//     </section>
//   </section>