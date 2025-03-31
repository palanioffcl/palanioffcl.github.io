import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function Achievements() {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <div className='achieve'>
                    <div className='box'>Built a LMS Web App within 3 hrs and sold for 7$ <a href="https://google.com">Link</a></div>
                    <div className='box'>Contributed 2/4 commits to Hacktoberfest 2022</div>
                    <div className='box'>Top 3% in Tryhackme rooms</div>
                    <div className='box'>Top 119th team position in ctftime.org</div>
                    <div className='box'>Solved 400+ Problems across all coding platforms</div>
                </div>
            </div>
        </>
    );
}