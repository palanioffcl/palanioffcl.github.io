import { Navbar } from '../Components/Navbar';
import profile from '../assets/profile.jpg';
import '../Components/index.css';

export function Home() {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <div className='profile'>
                    <img style={{ height: "150px" }} src={profile} alt="profile" />
                </div>
                <div className='about'>
                    <div style={{fontSize: 25, fontWeight:'bold', display:'flex', justifyContent:'center'}}>Software Developer & DevOps</div><br/>
                    Hi Myself Palani, a tech enthusiast with interest in solving problems.
                    I focus on building highly scalable systems. I am a quick learner and can adapt to new technologies. Currently working on Cloud computing and Server side technologies.
                </div>
                <div className='links'>
                    <div><img src="src/assets/github.png" style={{height: "35px"}} /></div>
                    <div><img src="src/assets/linkedin.webp" style={{height: "32px"}}/></div>
                    <div><img src="src/assets/mail.png" style={{height: "35px"}}/></div>
                    <div><img src="src/assets/youtube.png" style={{height: "35px"}}/></div>
                    <div><img src="src/assets/img.png" style={{height: "35px"}} /></div>
                </div>
            </div>
        </>
    );
}