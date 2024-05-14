import styles from './StepProgress.module.scss';

function ProgressGroup({ dataPhase, step, progressLabel }) {
    const iconStyle = step === '3' ? styles.progressIconUndone : styles.progressIconDone;
    const textStyle = step === '3' ? styles.textUndone : styles.textDone;
    const progressLabelStyle = step === '3' ? styles.progressLabelUndone : styles.progressLabel;
    return (
        <span className={styles.progressGroup} data-phase={dataPhase}>
            <span className={iconStyle}>
                <span className={textStyle}>{step}</span>
            </span>
            <span className={progressLabelStyle}>{progressLabel}</span>
        </span>
    )
}


export default function StepProgress() {
    return (
        <section className={`${styles.progressContainer} col col-12`}>
            <ProgressGroup
                dataPhase="address"
                step="1"
                progressLabel="寄送地址" />
            <span className={`${styles.progressBar} data-order="1"`}></span>
            <ProgressGroup
                dataPhase="shipping"
                step="2"
                progressLabel="運送方式" />
            <span className={`${styles.progressBar} data-order="2"`}></span>
            <ProgressGroup
                dataPhase="credit-card"
                step="3"
                progressLabel="付款資訊" />
        </section>
    )
}

//"progress-container col col-12">