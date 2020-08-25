import React, { useRef } from 'react';
import "../resources/index.css"
import imageOne from '../image/hobby.gif'
import imageTwo from '../image/android.gif'
import imageThree from '../image/react_moive.PNG'
import imageThreeDetail from '../image/react_moive_detail.PNG'
import PPT from './record'
import webflow from '../image/Webflow.PNG'
import DBTABLE from '../image/DBTABLE.png'
import SPRING from  '../image/spring.png'
import REACT from  '../image/react.png'
import ANDROID from  '../image/android.png'

function App() {

  
  return (
    <div className="App">
      <div className="header">
        <h1>PORTFOLIO</h1>
        <span> 이석운_포트폴리오 </span>
      </div>
      <PPT></PPT> 
      <div className="content"> 
        <div   className="container" id="spring">
          <div className="title-contain">
            <p className="title-text" style={{color:"#6DB33F"}}>hobbyWebSite</p> 
            <span>JavaSpring  / JavaTile  /  MVC Pattern, </span>  
          </div>
            <div className="content-text">
            
              <div className="image-container">
                <img className="image" alt="hobby" src={imageOne}>
                </img>
                <span > 취미 공유 사이트로 회원가입,수정,탈퇴,로그아웃등 기본적인 게시판 기능을 spring과 MVC패턴을 이용하여 구현함</span>
              </div>
              <div className="image-container">
              <p>웹 구성도</p>
              <img alt="WEBFLOW" src={webflow} style={{width:"1000px",height:"auto"}}></img>
              </div>
              <div className="image-container">
              <p>문서화</p>
              <img alt="DBTable" src={DBTABLE} style={{width:"1000px",height:"auto"}}></img>
              <span>
                조원들과 협업을 위한 DB 문서화
              </span>
              </div>
            </div>
          
        </div>
        <div className="container" id="android">
        <div className="title-contain">
            <p className="title-text" style={{color:"#3DDB85"}}>Cherry Blossom Reminder</p> 
            <span>Kotlin ,  Ajax, </span>  
          </div>
          <div className="image-container">
            
              <img className="image" alt="Android" src={imageTwo}></img>
              <span>
                
                벚꽃알리미 어플로 전국 벚꽃명소를 리스트뷰로 출력하여 클릭시 검색기능 제공
                
              </span>
            </div>
          
        </div>
        <div  className="container" id="react-movie">
        <div className="title-contain">
            <p className="title-text" style={{color:"#61DAFB"}}>React Movie</p> 
            <span>React , Axios </span>  
          </div>
          <div className="image-container">
              <img className="image" alt="react" src={imageThree}></img>
              <a href="https://lso5507.github.io/movie_app-react-/#/" style={{textAlign:"center"}}>LINK</a>
              <span>axios라이브러리를 이용해 json페이지를 파싱하여 실시간 업데이트가 가능하게 만듬</span>
          </div> 
          <div className="image-container">
              <img className="image" alt="react-Detail" src={imageThreeDetail}></img>
              <span>이미지 클릭시 디테일 페이지로 이동하며 영화소개와 다운로드 페이지로 이동 할 수 있게 만듬</span><br></br>
            </div>
            
        </div>
        <div   className="container" id="test">
        
        
          
        </div>
        
      </div>
    </div>

  );
}

export default App;
