"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';

export default function Mobilenav() {
  const [openmenu, setOpenmenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenmenu(false);
      }
    };

    const handleScroll = () => {
      setHideOnScroll(window.pageYOffset > 50);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={menuRef} className={`bg-[#f5aea2] pb-3 fixed top-0 left-0 right-0 lg:hidden sm:block ${openmenu ? 'z-20' : 'z-10'} ${hideOnScroll ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center px-8 pt-3">
        <div className="flex items-center">

        </div>
        <div className="flex items-center">
          <button onClick={() => setOpenmenu(!openmenu)} className="border-2 border-white rounded-sm text-3xl cursor-pointer">
            <GiHamburgerMenu className="fill-white w-[20px] h-[14px]" name={openmenu ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {openmenu && (
        <ul className="fixed top-[0px] bg-white w-[80%] h-[calc(100vh-76px)] z-10 p-4 shadow-md overflow-y-auto">
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="#/about"><button>About us</button></Link>
          </li>
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/contact">Contact</Link>
          </li>
          {/*<li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/privacy">Privacy Policy</Link>
          </li>*/}
        </ul>
      )}
    </header>
  );
}