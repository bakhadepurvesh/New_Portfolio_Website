import '../css_File/HeroSection.css'

const HeroSection = () => {

  return (
    <div className='hero-secion'>
        <div className='container-hero'> 
           <div className='left-hero'>
             <img src='/newPhoto.jpeg' alt='hero_photo'/>
           </div>
           <div className='right-hero'>
            <h1>Hello, I'm Purvesh Bakhade</h1>

            <p> Hi, I'm Purvesh  a Java Full Stack Developer focused on building reliable and user-friendly web solutions.</p>

            <button>Contact Me</button>
           </div>
        </div>
    </div>
  )
}

export default HeroSection;