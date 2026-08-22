import React, { useState } from 'react'

import "../css_File/Certificate.css";

const Certificate = () => {

    const [cards, setCardShow] = useState(4);
    const [showMore, setShowMore] = useState(false);
    
    const certificates = [
        {
         image: "/Wadhwani.jpeg",
         name:"Employability Skills",
         href:'/Certificates/Wadhwani.jpeg'  
        },
        {
         image: "/JavaOOPS.jpeg",
         name:"Java OOP Principles",
         href:'/Certificates/saylor.jpeg'  
        },
        {
         image: "/JavaNine.jpeg",
         name:"Java 9 Core Principles",
         href:'/Certificates/Mind_Luster.jpeg'  
        },
        {
          image: "/Oracle.jpeg",
          name:"Oracle Certificated",
          href: "/Certificates/Oracle_Certificated.pdf"
        },
        {
         image: "/JavaProgramming.jpeg",
         name:"Java Programming",
         href:'/Certificates/SkillUp_Java_Beginners.pdf'  
        },
        {
         image: "/Javafullstack.jpeg",
         name:"Java Full Stack",
         href:'/Certificates/JAVA_Full_Stack.pdf'  
        },
        {
         image: "/LLM.jpeg",
         name:"LLM Foundational",
         href:'/Certificates/LLM_Certificate.jpeg'  
        },
        {
         image: "/Gemini.jpeg",
         name:"Google Education",
         href:'/Certificates/Gemini_Certified_Student.pdf'  
        },
    ];

  return (
     <div className='certificate-section'>
          <h2>My Certificates</h2>
          
        <div className='certificate-container'>

            {certificates.slice(0, cards).map((certificate ,index) => (

            <div className='certificate-card' key={index}>
                <a href={certificate.href} target='_blank' rel="noopener noreferrer">
                    <div className='certificate_img'>
                        <img  src={certificate.image} alt='certificate_image'/>
                    </div>
                </a>
                <h2 className='courseName'>{certificate.name}</h2>
            </div>

            ))}
           
        </div>
        <button
            onClick={() => {
                if (!showMore) {
                    setCardShow(certificates.length);
                    setShowMore(true);
                } else {
                    setCardShow(4);
                    setShowMore(false);
                }
            }}>
            {showMore ? "Show Less" : "Show More"}
        </button>

     </div>
   ) 
}
export default Certificate;