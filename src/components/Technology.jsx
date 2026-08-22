import React, { useState } from 'react'
import '../css_File/Technology.css';
import { FaHtml5, FaJava, FaReact ,FaGithub,FaGitAlt} from "react-icons/fa";
import { SiHibernate, SiPostgresql ,SiMysql ,SiPostman,SiSwagger,SiApachemaven,SiEclipseide,SiSpringsecurity,SiIntellijidea} from "react-icons/si";
import { TbBrandJavascript ,TbFileTypeCss } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";

const Technology = () => {

    const[techShow ,setTechShow] = useState(3);

    const [showMore, setShowMore] = useState(false);

    const skills_List = [

        {
         name:'HTML5',
         icon : FaHtml5,
         color: "#E34F26",
         description : "Used to create the structure and content of web pages."
        },
        
        {
            name: 'CSS3',
            icon:  TbFileTypeCss,
            color: "#1572B6",
            description: "Used to style web pages and create responsive layouts."
        },

        {
            name:'JavaScript',
            icon : TbBrandJavascript,
            color: "#F7DF1E",
            description: "Used to create interactive and dynamic web applications."
        },
        
        {
         name :'React.js',
         icon : FaReact,
         color: "#61DAFB",
         description: "Used to build interactive and dynamic user interfaces."  
        },
        {
         name :'Java',
         icon : FaJava,
         color: "#ED8B00",
         description: "Used to develop robust and scalable backend applications." 
        },
        {
         name :'Spring Boot',
         icon : BiLogoSpringBoot,
         color: "#6DB33F",
         description: "Used to build secure and scalable RESTful backend applications." 
        },
        {
            name:'Hibernate / JPA',
            icon: SiHibernate ,
            color: "#59666C",
            description: "Used to simplify database operations and map Java objects to database tables."
        },
        {
            name:'REST APIs',
            icon:  BiLogoSpringBoot ,
            color: "#4A90E2",
            description: "Used to build and integrate APIs for communication between frontend and backend."
        },
        {
            name:'MySQL',
            icon: SiMysql,
            color: "#4479A1",
            description: "Used to store, manage, and retrieve application data using relational databases."
        },
        {
            name:'PostgreSQL',
            icon: SiPostgresql ,
            color: "#4169E1",
            description: "Used to manage reliable and scalable relational database applications."
        },
        {
            name: "Git",
            icon: FaGitAlt ,
            color: "#F05032",
            description: "Used to track code changes and manage different versions of a project."
        },
        {
            name: "GitHub",
            icon: FaGithub ,
            color: "#181717",
            description: "Used to host, manage, and collaborate on software projects using Git."
        },
        {
            name: "Postman",
            icon: SiPostman ,
            color: "#FF6C37",
            description: "Used to test, debug, and validate REST APIs."
        },
        {
            name: "Swagger",
            icon: SiSwagger ,
            color: "#85EA2D",
            description: "Used to document, visualize, and test REST APIs."
        },
        {
            name: "Maven",
            icon: SiApachemaven ,
            color: "#C71A36",
            description: "Used to manage project dependencies, builds, and configurations."
        },
        {
            name: "Spring Security",
            icon: SiSpringsecurity ,
            color: "#6DB33F",
            description: "Used to implement authentication, authorization, and application security."
        },
        {
            name: "IntelliJ IDEA",
            icon: SiIntellijidea ,
            color: "#000000",
            description: "Used as an IDE for developing, debugging, and managing Java applications."
        },
        {
            name: "Eclipse",
            icon: SiEclipseide ,
            color: "#2C2255",
            description: "Used as an IDE for developing, testing, and debugging Java applications."
        }
        
        ];

    const visibleSkills = skills_List.slice(0,techShow);                      

  return (
    <div className='tech-section'>
         
         <h2 >My Tech Stack</h2> 

        <div className='technology-section'>
          {/* used the map */}
           {visibleSkills.map((skill) =>{
               const Icon = skill.icon;
             return (
              <div className='box_1' key={skill.name}>
                <Icon className="tech-icon" style={{color:skill.color }} />
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </div>  
           );
           })} 
        </div>

        <button onClick={() => {
           if(!showMore){
           
              setTechShow(techShow + 3);

            if(techShow + 3 >= skills_List.length){
                 setShowMore(true);
            }
        } else{     
              setTechShow(techShow - 3);

               if(techShow - 3  <=3){
                 setShowMore(false);
               }
            }
        }}>
           {showMore ? "Show Less" : "Show More"} 
        </button>
    </div>
  )
}

export default Technology;