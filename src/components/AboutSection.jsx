
import "../css_File/AboutSection.css";

const AboutSection = () => {

  return (
    <div className='about-section'>
        <div className='container-section'>
            <div className='left'>
                 <img src="/Programmer.jpeg" alt="Programmer"/>
            </div>
            <div className='right'>

              <h1>Hello, I'm Purvesh Bakhade</h1>

              <h2>Java Full Stack Developer</h2>

              <p>
               I'm Purvesh, a Java Full Stack Developer focused on building clean, responsive, and user-friendly web applications. I work with Java, Spring Boot, REST APIs, MySQL, JavaScript, and React. I enjoy developing reliable backend systems and connecting them with simple, effective frontend interfaces. I’m always improving my skills and working on practical projects to create useful solutions.
              </p>

              <button>View My More</button>
            </div>
        </div>
    </div>
  )
}


export default AboutSection;