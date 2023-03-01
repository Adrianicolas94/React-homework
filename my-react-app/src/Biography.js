import React from 'react';
import './App.css'

function Image() {
    return (
        
            <div className="Main">
                <div className='Body'>
                    <img className='image' src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' width="150px"/>
                
                
                    <h3>Biography</h3>
                <div className="Info">
                    <h4>Age:<span>25</span></h4>
                    <h4>Job:<span>Web dev</span></h4>
                    <h4>Height:<span>1.80m</span></h4>
                </div>
                <p>A skilled web developer with expertise in front-end and back-end technologies, proficient in HTML, CSS, JavaScript, and various programming languages, passionate about creating high-quality websites and applications.</p>
                <div className="IconsFlex">
                    <img  src={require('./images/facebook.png')} width="25px"/>
                    <img  src={require('./images/email.png')} width="25px"/>
                    <img  src={require('./images/linkedin.png')} width="25px"/>
                </div>
                </div>
            </div>




            



    )
}


export default Image;


