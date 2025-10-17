import React from 'react';
import logo from '../../assets/logo.png';
import x from '../../assets/x.png';
import linkedIn from '../../assets/linkedIn.png';
import fb from '../../assets/fb.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#001931] text-base-content p-10 border-b-1 border-dashed border-white px-20">
                <aside>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <p className='text-xl text-white'>HERO.IO</p>
                    <p className='text-md text-white'>We build productive apps</p>
                </aside>
                <nav className='md:ml-30'>
                    <h6 className="footer-title text-gray-300 font-bold">Services</h6>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav className='md:ml-30'>
                    <h6 className="footer-title text-gray-300 font-bold">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav className='md:ml-30'>
                    <h6 className="footer-title text-gray-300 font-bold">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                       <img className='hover:cursor-pointer' src={x} alt="" />
                    </a>
                    <a>
                        <img className='hover:cursor-pointer' src={linkedIn} alt="" />
                    </a>
                    <a>
                        <img className='hover:cursor-pointer' src={fb} alt="" />
                    </a>
                </nav>
            </footer>
            <footer className="bg-[#001931] text-white items-center text-center p-4">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;