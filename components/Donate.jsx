import React from 'react';
import Link from 'next/link';

const Donate = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 text-center">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Fè yon don</h3>
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">Si ou vle sipòte nou, ou ka klike sou bouton sa</p>
        <div className="text-center">
         <Link href="https://app.pgecom.com/payme/ernsbaptiste">
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Klike la</span>
         </Link>
        </div>
    </div>
  )
};

export default Donate;