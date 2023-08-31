import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'

import Link from 'next/link';



const Header = () => {
 

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl h-6 w-6 text-white">
            <Image
             alt="logo"
             style={{
              maxWidth: '10%',
              height: '10%',
             }}
             className="align-middle"
             src = {logo}
            />
            </span>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Header;