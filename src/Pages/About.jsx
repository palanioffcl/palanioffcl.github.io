import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function About() {
    return (
        <>
            <Navbar />
            
            <div className='parent'>
                <div className='achieve'>Tech Stack</div>
                <div className='techstack'>
                    <div className='ts'>C</div>
                    <div className='ts'>Java</div>
                    <div className='ts'>Python</div>
                    <div className='ts'>JavaScript</div>
                    <div className='ts'>Django</div>
                    <div className='ts'>AWS</div>
                    <div className='ts'>MySQL</div>
                    <div className='ts'>MongoDB</div>
                    <div className='ts'>Jenkins</div>
                    <div className='ts'>NGINX</div>
                    <div className='ts'>NestJS</div>
                    <div className='ts'>Docker</div>
                    <div className='ts'>Docker swarm</div>
                    <div className='ts'>Linux</div>
                    <div className='ts'>Git</div>
                    <div className='ts'>HTML</div>
                    <div className='ts'>CSS</div>
                </div>
            </div>

            <div className='achieve'>Journey</div>
            <div className='parent'>
                <div className='timeline'>Backend Developer & DevOps Intern - (2023 - Present)<br></br><br></br> GwayERP</div>
                <div className='timeline'>Bachelors of Engineering - CSE (2021 - Present)<br></br><br></br> Sree Sastha Institute of Engineering and Technology</div>
                <div className='timeline'>Grade XII - (2019-2021) <br></br><br></br> Sri Ramakrishna Matric Hr Sec school</div>
                <div className='timeline'>Grade XII - (2018-2019) <br></br><br></br> Sri Sankara Vidya Kendra</div>
            </div>
            <div className='achieve'></div>
       </>
    );
}