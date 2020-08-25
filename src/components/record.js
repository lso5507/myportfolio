import React from 'react';
import lee from "../image/Lee.jpg"




function App(){
    return(
        <div className="myPT">
        <div className="imageZone">
          <img src={lee} style={{width:"200px",height:"auto"}}></img>
          <table className="skil">
              <tr>
                <th>FrontEnd</th><th>BackEnd</th><th>DataBase</th>
              </tr>
              <tr>
                  <td>JavaScript</td><td>Java/<br></br> Spring Framework</td><td>MySql</td>
              </tr>
              <tr>
                  <td>HTML5/CSS</td><td colSpan="2">Node.js</td>
             </tr> 
             <tr>
                  <td rowSpan="2">React/React Hook</td><td colSpan="2">Python</td>
             </tr>
             <tr>
                  <td colSpan="2">Kotlin</td>
             </tr>
              
          </table>
        </div>
        <div className="record">
          <table>
              <tr>
                <td>이름 (한글) : 이석운 </td><td>이름 (영문) : LeeSeokWoon</td>
              </tr>
              <tr>
                <td>생년월일 : 96.07.13 </td><td>성별 : 남 </td>
              </tr>
              <tr>
                <td colSpan="2">병역사항 : 군필 </td>
              </tr>  
              <tr>
                <td colSpan="2">주소 : 수원시 장안구 율전동 307-9번지  </td>
              </tr>
              <tr>
                <td colSpan="2">연락처 : 010-5714-5507</td>
              </tr>
              <tr>
                <td colSpan="2">E-Mail : leeseokwoon@naver.com</td> {/*나중에 Email 보내기 자동연결 기능 필요  */}
              </tr>
              <tr>
                <td>취득 자격증 : 정보처리 기능사(2014.07.03)</td><td>전산회계</td>
              </tr>
          </table>
          
        </div>  
      </div>

    );

}


export default App;