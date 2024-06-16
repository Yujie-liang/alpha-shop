import styles from './StepProgressBar.module.scss';

function ProgressGroup({ dataPhase, step, progressLabel, currentStep }) {
    let iconStyle = styles.progressIcon;
    let textStyle = styles.text;
    let progressLabelStyle = styles.progressLabel;
    // conditional styling: done, undone
    if (step < currentStep) {
        iconStyle = styles.progressIconDone;
        textStyle = styles.textUnDone;
        progressLabelStyle = styles.progressLabelDone;
    }
    if (step > currentStep) {
        iconStyle = styles.progressIconUndone;
        textStyle = styles.textUndone;
        progressLabelStyle = styles.progressLabelUndone;
    }


    return (
        <span className={styles.progressGroup} data-phase={dataPhase}>
            <span className={iconStyle}>
                <span className={textStyle}>{step}</span>
            </span>
            <span className={progressLabelStyle}>{progressLabel}</span>
        </span>
    )
}


export default function StepProgress({ currentStep }) {
    return (
        <section className={`${styles.progressContainer} col col-12`}>
            <ProgressGroup
                dataPhase="address"
                step="1"
                progressLabel="寄送地址"
                currentStep={currentStep} />
            <span className={1 < currentStep ? styles.progressBar : styles.progressBarHidden}></span>
            <ProgressGroup
                dataPhase="shipping"
                step="2"
                progressLabel="運送方式"
                currentStep={currentStep} />
            <span className={2 < currentStep ? styles.progressBar : styles.progressBarHidden}></span>
            <ProgressGroup
                dataPhase="credit-card"
                step="3"
                progressLabel="付款資訊"
                currentStep={currentStep} />
        </section>
    )
}
