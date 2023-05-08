import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-blue-50'>
            <footer className="footer p-10 text-base-content md:w-9/12 mx-auto">

                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link className="link link-hover text-base hover:text-red-600">Home</Link>
                    <Link className="link link-hover text-base hover:text-red-600">Blog</Link>
                    <Link className="link link-hover text-base hover:text-red-600">Register</Link>
                    <Link className="link link-hover text-base hover:text-red-600">Login</Link>
                </div>

                <div className='pr-5 md:pr-0'>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-base">Stay with us</span>
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="username@site.com" className="input input-bordered w-full h-10 pr-16" />
                            <button className="py-2.5 text-white font-bold px-2 bg-red-600 absolute top-0 right-0 rounded-l-none rounded-r-lg border-0">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <div className="flex flex-col items-center gap-4 text-left">
                        <Link to='https://www.facebook.com/afrojaakther.mitu.733' className='flex items-center gap-3'><FaFacebook className='text-2xl text-blue-700' />Afroja Akther Mitu</Link>

                        <Link className='flex items-center gap-3'><FaLinkedin className='text-2xl text-blue-900' />Afroja Akther Mitu</Link>

                        <Link to='afrojamituu@gmail.com' className='flex items-center gap-3'><FaInstagram className='text-2xl text-pink-800' />__afroja__mitu__</Link>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;