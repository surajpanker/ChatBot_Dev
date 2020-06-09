import React from 'react';
import Description from './Description';
import Logo from '../chatbot/images/suraj.jpeg';
import Logo1 from '../chatbot/images/vikas.jpg';
import '../App.css';
const About = () =>(
        
        
        <div>
          <div className="About">
           <h5>Created by</h5>
         <table>
            <td>

            <tr>
            <img src={Logo}  class="conatiner"  style={{height:100,width:100}}/>
            </tr>
            <tr>
              Suarj Panker
             </tr>
             <tr>
               Roll No: BE/25103/16
             </tr>
             <tr>
             SDE-1 at Sociolla in Gurugram
             </tr>
              </td>
              <td>
              <tr>
              <img src={Logo1}  class="conatiner"  style={{height:100,width:100}}/>

              </tr>
              <tr>
           Vikas Kumawat
            </tr>
            <tr>
               Roll No: BE/25019/16
             </tr>
             <tr>
            SDE-1 at Infobject in Jaipur
             </tr>
             
            </td>

      </table>


     
          <Description/>
        </div>
        </div>
    )
    
    

export default About;