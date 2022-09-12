
import React,{useState,useEffect} from 'react';
import Hidden from "@material-ui/core/Hidden";



const Main = () => {

   return (
    <div id="steps" className="step-container">
    <div className="grid-wrapper">
      <div id="grid" className="steps-grid">
        <div id="grid-card" className="steps-sticky-card">
          <div className="how-to-image">
            <div className="hero-background-image steps-background">
              <div style={{display:"inlineBlock",transform:`translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`}}className="background-load-top"></div>
              <div style={{display:"inlineBlock",transform:`translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`}} className="background-load-bottom"></div>
            </div>
          </div>
          <div className="steps-intro">
            <div className="steps-description">
              <div>
                <div className="subtitle-wrapper">
                  <div className="subtitle">二人三脚、一緒に未来を切り開こう</div>
                </div>
                <h2>Excel NZは、あなたの留学を最初から最後までサポートします。</h2>
              </div>
              <div className="body-display large">Excel NZは、困ったときの誰かにな
              ること以上に、人と人の関係作りを大切にして、共に留学を乗り切るサポートを心がけ
              ています。世界を舞台にグローバル社会に生きるあなたを応援します。</div>
            </div>
            <a id="cards-button" data-w-id="8cdb7a1e-7b40-b714-c5d2-eac8ff874d25"
            href="/home" className="button w-inline-block">
              <div>お問い合わせはこちらから</div>
            </a>
          </div>
        </div>
        
        <div id="cards" className="steps-cards">
          <div id="cards-subtitle" className="subtitle-intro-wrapper">
            <div className="subtitle">３つの魅力</div>
            <div id="cards-line" className="horizontal-line"></div>
          </div>
          <div id="cards-steps" className="steps-tracker">
            <div className="how-it-works-fill"></div>
          </div>
          <div id="cards-wrapper" className="steps-card-wrapper">
          {/* <div className="grid--2col">
       
            <div className="card_image"><img src='/assets/D.jpg' loading="lazy" alt="" className="image--cover"/></div>
            <div className="card_image"><img src='/assets/backgroundMain.jpg' loading="lazy" alt="" className="image--cover"/></div>
          </div> */}
            <div className="steps-card">
              <div className="steps-circle">
                <div className="steps-dot"></div>
                <div className="card-arrow"></div>
                <div className="steps-circle-outline"></div>
              </div>
              <div id="steps-content" className="steps-content">
                <div id="steps-icon" className="steps-icon">
                  <div>1</div>
                </div>
                <div id="w-node-e86b96ff-3ac5-29ae-9f69-98c2ef862eb7-77755be8" className="steps-description">
                  <h3>自分を見つけよう−ここニュージーランドで</h3>
                  <div className="body-display">壮大で包容力があり、美しく優しさに溢れる豊かな自然と人の国、ニュージーランドで
、本当の自分を見つけよう。時間がゆっくり流れる空間で、今まで気がつかなかったこと
、見えなかった景色が必ず見つかるはず。ニュージーランドは、あなたの訪問を待って
います。</div>
                </div>
              </div>
            </div>
            <div className="steps-card">
              <div className="steps-circle center">
                <div className="card-arrow"></div>
                <div className="steps-circle-outline two"></div>
                <div className="steps-dot"></div>
              </div>
              <div id="w-node-_15e997dc-c8b6-bec7-cec3-828976171b2e-77755be8" className="steps-content">
                <div id="w-node-_15e997dc-c8b6-bec7-cec3-828976171b2f-77755be8" className="steps-icon">
                  <div>2</div>
                </div>
                <div id="w-node-_15e997dc-c8b6-bec7-cec3-828976171b32-77755be8" className="steps-description">
                  <h3>輝く個性、世界のひとり−ことばで繋がる「世界市民」</h3>
                  <div className="body-display">ニュージーランドは多様性を尊重し、大切にする国。世界の共通語である「英語」で
それぞれの違いの中にも共通の価値観を共有出来たら、なんと素晴らしいでしょう。私たちは日本人、そして「世界市民」。</div>
                </div>
              </div>
            </div>
            <div className="steps-card">
              <div className="steps-circle center">
                <div className="card-arrow"></div>
                <div className="steps-circle-outline three"></div>
                <div className="steps-dot"></div>
              </div>
              <div id="w-node-_47b3f03a-b82e-7211-421c-88e7213c4b5b-77755be8" className="steps-content">
                <div id="w-node-_47b3f03a-b82e-7211-421c-88e7213c4b5c-77755be8" className="steps-icon">
                  <div>3</div>
                </div>
                <div id="w-node-_47b3f03a-b82e-7211-421c-88e7213c4b5f-77755be8" className="steps-description">
                  <h3>新しい環境−新しい家族</h3>
                  <div className="body-display">ニュージーランドという国で人々との新しい出会いは、本当にワクワクするものです
。特に一緒に生活をするホストファミリーは、ニュージーランドの家族として、出会っ
たその日から、あなたを家族の一員として、温かく受け入れてくれることでしょう。
すべてのホストファミリーは、通学する学校から教育省の厳しい基準のもと責任を持っ
て紹介されるご家庭です。</div>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Main
