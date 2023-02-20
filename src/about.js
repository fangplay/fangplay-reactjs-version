import React from 'react';

function About() {
  return (
    <div class="col-md-16">
    <div class='container'>
      <div class='row'>
          <div class='col-md-5'>
            <h4 class='h4-seo'>Introduce FANGPLAY</h4>
            <p>FANGPLAY Sirirak Sophakarn</p>
            <p>Ultimate SPECTRUM GAMER TYPE S</p>
            {/* <p>Leader STGNeo+UGM Team</p> */}
            <p>"Though I'm alone but not alone all times."</p>
            <p>"雖然我一個人，但並非總是孤單。"</p>
            <p>"私は一人ですが、すべての時間だけではありません。"</p>
            <p>"나는 혼자이지만 항상 혼자가 아닙니다."</p>
          </div>
          <div class='col-md-5'>
            <img src={ require('./img/profile-2023.jpg') } alt='Circle Image' class='rounded-circle'/>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6'>
            <h4 class='h4-seo'>Why set nickname is "FANGPLAY"?</h4>
            <p>FANG is speaking in 2 phrase.<br/>First speaking in fˈæŋ (f a1 ng)<br/>Second speaking in F AE1 NG
            </p>
            <p>Extra conclution : FANG has available in girl name and in old friends name.</p>
          </div>
          <div class='col-md-6'>
            <h4 class='h4-seo'>Language</h4>
            <p>Thai,English,Chinese,Japanese,Korean</p><br/>
            <p>泰語,英語,中文,日語,韓語</p><br/>
            <p>タイ語,英語,中国語,日本語,韓国語</p><br/>
            <p>태국어, 영어, 중국어, 일본어, 한국어</p>
          </div>
          <div class='col-md-6'>
            <h4 class='h4-seo'>Basic Information</h4>
            <p>Name : Sirirak Sophakarn</p>
            <p>Chinese Name : 西裡拉克·索法卡恩</p>
            <p>Japanese Name : シリラク・ソファカーン</p>
            <p>Korean Name : 시라크 소타카르</p>
            <p>Nickname : Fangplay</p>
            <p>Chinese Nickname : 方普拉</p>
            <p>Japanese Nickname : ファングプレイ</p>
            <p>Korean Nickname : 팡플레이</p>
            <p>Birth Date : 5 August 1995</p>
            <p>Blood Line : B</p>
          </div>
          <div class='col-md-6'>
            <h4 class='h4-seo'>Education</h4>
            <h5>High School</h5>
            <p>Traim Udom Suksa School Of The South</p>
            <p>Science-Math Program</p>
            <p>YEAR : 2012 - 2014</p>
            <h5>University(Bachelor's Degree)</h5>
            <p>Thaksin University Phatthalung Campus</p>
            <p>Bechelor of Science(B.Sc.)</p>
            <p>Faculty Of Science : Computer Science</p>
            <p>YEAR : 2015 - 2020</p>
            <p></p>
          </div>
        </div>
    </div>
    </div>
  );
}
export default About;