import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function Projects() {

    return (
        <>
            <div className="homepage">
                <Navbar />
                <div className='projs'>
                    <div className='pbox'>Radox - A Backend Web Framework <a href="https://google.com">Link</a></div>
                    <div className='pbox'>URL Shortener - MERN Stack</div>
                    <div className='pbox'>Blogs - A Substack Clone</div>
                    <div className='pbox'>Leave Management System</div>
                    <div className='pbox'>KeyText - To make copy and paste easy!</div>
                    <div className='pbox'>Portfolio</div>
                    <div className='pbox'>Blind Helper</div>
                    <div className='pbox'>CTFation - A Python Automation</div>
                    <div className='pbox'>Dbrute - A Directory Bruteforce Automation</div>
                </div>
            </div>
        </>
    );
}