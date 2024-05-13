function ProgressGroup({ dataPhase, step, progressLabel }){
    return(
        <span class="progress-group" data-phase={dataPhase}>
            <span class="progress-icon">
            <span class="text">{step}</span>
            </span>
            <span class="progress-label">{progressLabel}</span>
        </span>
    )
}


export default function StepProgress(){
    return (
        <section class="progress-container col col-12">
            <ProgressGroup 
                dataPhase="address"
                step="1"
                progressLabel="寄送地址"/>
            <span class="progress-bar" data-order="1"></span>
            <ProgressGroup 
                dataPhase="shipping"
                step="2"
                progressLabel="運送方式"/>
            <span class="progress-bar" data-order="2"></span>
            <ProgressGroup 
                dataPhase="credit-card"
                step="3"
                progressLabel="付款資訊"/>
        </section>
    )
}