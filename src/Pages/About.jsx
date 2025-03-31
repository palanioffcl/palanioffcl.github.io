import { Link } from 'react-router-dom';
import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function About() {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <div className='achieve'>
                    Tech Stack:

                    <Link to="https://google.com">Resume</Link>
                </div>
            </div>
        </>
    );
}