import gitImg from '../../assets/github.png';
import heroLogo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router';

const Navbar = () => {

    const location = useLocation();

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-20 px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li><Link to='/' className={location.pathname === '/' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Home</Link></li>
                        <li><Link to='/apps' className={location.pathname === '/apps' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Apps</Link></li>
                        <li><Link to='/installedApps' className={location.pathname === '/installedApps' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Installation</Link></li>
                    </ul>
                </div>
                <Link to='/'><div className="flex items-center gap-2 hover:cursor-pointer"><img className='w-10 h-10' src={heroLogo} alt="" /> <h3 className='text-xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>HERO.IO</h3></div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to='/' className={location.pathname === '/' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Home</Link></li>
                    <li><Link to='/apps' className={location.pathname === '/apps' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Apps</Link></li>
                    <li><Link to='/installedApps' className={location.pathname === '/installedApps' ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : ""}>Installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold" href='https://github.com/didarulshahriar37'><img src={gitImg} alt="" /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;