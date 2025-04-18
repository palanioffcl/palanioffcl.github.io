import '../Components/index.css';
import { Navbar } from '../Components/Navbar';

export function Projects() {
    return (
        <>
        <Navbar />
        <div className='projectswrapper'>
        <div className='projs'>
            <div className='pbox'>Radox - A Backend Web Framework - <a href="https://github.com/codeverything/radox" className='link'>Link</a></div>
            <div className='pbox'>URL Shortener - MERN Stack - <a href="https://urlfe.vercel.app" className='link'>Preview Live</a></div>
            <div className='pbox'>Blogs - A Substack Clone - <a href="https://blogfe-orpin.vercel.app" className='link'>Preview Live</a></div>
            <div className='pbox'>Leave Management System - <a href="https://lms-chi-roan.vercel.app" className='link'>Preview Live</a></div>
            <div className='pbox'>KeyText - To make copy and paste easy! - <a href="https://keytext.vercel.app/" className='link'>Preview Live</a></div>
            <div className='pbox'>Portfolio - <a href="https://palanioffcl.github.io" className='link'>Preview Live</a></div>
            <div className='pbox'>Portfolio 1.0- <a href="https://palanioffcl-github-io.vercel.app/" className='link'>Preview Live</a></div>
            <div className='pbox'>Blind Helper - <a href="https://blind-helper.vercel.app" className='link'>Preview Live</a></div>
            <div className='pbox'>CTFation - A Python Automation - <a href="https://github.com/palanioffcl/CTFation" className='link'>Link</a></div>
            <div className='pbox'>Dbrute - A Directory Bruteforce Automation - <a href="https://github.com/palanioffcl/dbrute" className='link'>Link</a></div>
            <div className='pbox'>EliteERP - A Clone of ERP Application with HTML, CSS - <a href="https://elitebooks-erp.vercel.app/" className='link'>Link</a></div>
        
        </div>
        </div>
        <div className='achieve'></div>
        </>
    );
}