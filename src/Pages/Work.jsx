import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function Work() {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <div style={{paddingTop:"45px"}}>
                <div className='work'>
                    <ul>
                        <h3>GwayERP (July 2023 - Present)</h3>
                        <li>Developed Backend REST APIs (Django Rest Framework) DjangoORM for database integration for inhouse CRM and other Client projects.</li>
                        <li>Implemented secure Authentication system with JWT and custom fields for dynamic asset management.</li>
                        <li>Developed and deployed sustainable deployment pipeline with various different fault scenarios using Jenkins CI/CD.</li>
                        <li>Designed and implemented a High-Available and fault tolerant application without downtime based on Docker and Docker swarm.</li>
                        <li>Configured Nginx Reverse Proxy and cost-effective infrastructure with AWS Cloud Services.</li>

                    </ul>
                </div>
                </div>
                
            </div>
        </>
    );
}