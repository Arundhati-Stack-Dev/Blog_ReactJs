import React from 'react';

const AboutPage =()=>{
    return(
        <div className="about">
            <h1 className="page_header">About</h1>
            <div style={{marginTop:"20px"}}>
                <h2> What is Lorem Ipsum</h2>
                <p> Lorem Ipsum is simply dummy 
                   text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy 
                   text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it to make a
                   type specimen book. It has survived not only five
                    centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged.
                </p>
            </div>    
            <div className="team_member">
                <div className="title">
                    <span>Team Members</span>
                </div>
                <div className="body">
                    <div>
                         <img src="/images/team1.jpg" alt="not found" className="team"/>
                         <p>She is Content-Writer</p>
                    </div>
                    <div>
                         <img src="/images/team2.jpg" alt="not found" className="team"/>
                         <p>He is Content-Writer</p>
                    </div>
                    <div>
                         <img src="/images/team3.jpg" alt="not found" className="team"/>
                         <p>He is Content-Writer</p>
                    </div>
                </div>
            </div>
        </div>
    );
       
    
}

export default AboutPage;