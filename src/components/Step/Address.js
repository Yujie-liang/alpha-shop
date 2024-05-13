function formGroup({ formClass, label, children }){
    return(
        <div class="col col-12">
            <div class={formClass}>
            <div class="input-label">{label}</div>
            {children}
            </div>
        </div>
    )
}

function Step({ dataPhase, formTitle, children }){
    return(
    <form class="col col-12" data-phase={dataPhase}>
        <h3 class="form-title">{formTitle}</h3>
        <section class="form-body col col-12">
        { children }
        </section>
    </form>
    )
}
function Step1(){
    return
}

export default function Steps(){
    return (
        <>
            <Step 
                dataPhase="address"
                formTitle="寄送地址"
                
            />
        </>
    )
}

<form class="col col-12" data-phase="address">
              <h3 class="form-title">寄送地址</h3>
              <section class="form-body col col-12">
                <div class="col col-12">
                  <div class="input-group input-w-lg-2 input-w-sm-s1">
                    <div class="input-label">稱謂</div>
                    <div class="select-container">
                      <select>
                        <option value="mr" selected>先生</option>
                        <option value="ms">女士</option>
                        <option value="mx">不明</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group input-w-lg-4 input-w-sm-s2">
                    <div class="input-label">姓名</div>
                    <input type="text" placeholder="請輸入姓名" />
                  </div>
                </div>
                <div class="col col-12">
                  <div class="input-group input-w-lg-3 input-w-sm-full">
                    <div class="input-label">電話</div>
                    <input type="tel" placeholder="請輸入行動電話" />
                  </div>
                  <div class="input-group input-w-lg-3 input-w-sm-full">
                    <div class="input-label">Email</div>
                    <input type="email" placeholder="請輸入電子郵件" />
                  </div>
                </div>
                <div class="col col-12">
                  <div class="input-group input-w-lg-2 input-w-sm-full">
                    <div class="input-label">縣市</div>
                    <div class="select-container">
                      <select required>
                        <option value="">請選擇縣市</option>
                        <option value="KLU">基隆市</option>
                        <option value="TPH">新北市</option>
                        <option value="TPE">臺北市</option>
                        <option value="TYC">桃園市</option>
                        <option value="HSH">新竹縣</option>
                        <option value="HSC">新竹市</option>
                        <option value="MAC">苗栗市</option>
                        <option value="MAL">苗栗縣</option>
                        <option value="TXG">臺中市</option>
                        <option value="CWH">彰化縣</option>
                        <option value="CWS">彰化市</option>
                        <option value="NTC">南投市</option>
                        <option value="NTO">南投縣</option>
                        <option value="YLH">雲林縣</option>
                        <option value="CHY">嘉義縣</option>
                        <option value="CYI">嘉義市</option>
                        <option value="TNN">臺南市</option>
                        <option value="KHH">高雄市</option>
                        <option value="IUH">屏東縣</option>
                        <option value="PTS">屏東市</option>
                        <option value="ILN">宜蘭縣</option>
                        <option value="ILC">宜蘭市</option>
                        <option value="HWA">花蓮縣</option>
                        <option value="HWC">花蓮市</option>
                        <option value="TTC">臺東市</option>
                        <option value="TTT">臺東縣</option>
                        <option value="PEH">澎湖縣</option>
                        <option value="KMN">金門縣</option>
                        <option value="LNN">連江縣</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group input-w-lg-4 input-w-sm-full">
                    <div class="input-label">地址</div>
                    <input type="text" placeholder="請輸入地址" />
                  </div>
                </div>
              </section>
            </form>