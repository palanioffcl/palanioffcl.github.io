import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function About() {
    return (
        <>
            <Navbar />

            <div className='parent'>
                <div className='achieve'>Tech Stack</div>
                <div className='techstack'>
                    <div className='ts'>C++</div>
                    <div className='ts'>Java</div>
                    <div className='ts'>Python</div>
                    <div className='ts'>AWS</div>
                    <div className='ts'>MS-SQL</div>
                    <div className='ts'>MongoDB</div>
                    <div className='ts'>NodeJS</div>
                    <div className='ts'>Jenkins</div>
                    <div className='ts'>NGINX</div>
                    <div className='ts'>Docker</div>
                    <div className='ts'>Linux</div>
                    <div className='ts'>Git</div>
                    <div className='ts'>HTML</div>
                    <div className='ts'>CSS</div>
                </div>
            </div>

            <div className='achieve'>Coding</div>
            <div className="projectswrapper">
                <div className='projs'>
                    <div className='pbox'>500+ Problems Solved<br></br><br></br> <a className='link' href='https://leetcode.com/palaniga'>Leetcode</a></div>
                    <div className='pbox'>4🌟 on Java & 3 🌟on DSA<br></br><br></br> <a className='link' href="https://www.hackerrank.com/profile/palanioffl">Hackerrank</a></div>
                    <div className='pbox'>250 points in Geeksforgeeks<br></br><br></br><a className='link' href="https://www.geeksforgeeks.org/user/palanioffl/">Geeksforgeeks</a></div>
                    <div className='pbox'>MaxRating(797) Newbie<br></br><br></br> <a className='link' href="https://codeforces.com/profile/palanioffl">Codeforces</a></div>
                    <div className='pbox'>MaxRating(922) 1⭐<br></br><br></br> <a className='link' href="https://www.codechef.com/users/palaniga">Codechef</a></div>
                </div>
            </div>
            <div className='achieve'></div>
        </>
    );
}