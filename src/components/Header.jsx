import React, { useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (action) => {
        if (action === 'open') {
        setMenuOpen(true);
        } else {
        setMenuOpen(false);
        }
    };

    return (
        <header className="bg-white border-b-[2px] border-[#17449c] flex justify-between items-center w-full h-auto">
            <div className="bg-white flex justify-start p-4 ">
                <picture className='w-[215px] h-[70px]'>
                    <img className='w-full h-auto' src="/img/logo-sfondo.png" alt="logo" />
                </picture>
            </div>

            <div className="flex items-center bg-white">
                <button className={`md:hidden pr-2 flex justify-center 
                justify-items-center ${menuOpen ? 'hidden' : ''}`} id="menuOpen"
                onClick={() => handleClick('open')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <button
                className={`md:hidden pr-2 flex justify-center justify-items-center ${menuOpen ? '' : 'hidden'}`}
                id="menuClose"
                onClick={() => handleClick('close')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <nav className={`bg-white text-[#17449c] font-semibold text-base flex flex-col items-end absolute top-[104px] w-full h-auto md:flex md:flex-row md:top-0 md:static md:justify-end z-10 ${menuOpen ? '' : 'hidden'}`}>
                <a className="p-2 border-b-[1px] border-[#17449c] w-full flex justify-end hover:bg-[#dadddf] hover:border-[1px] hover:border-[#17449c] hover:text-[#ec3541] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/">Home</a>
                <a className="p-2 border-b-[1px] border-[#17449c] w-full flex justify-end hover:bg-[#dadddf] hover:border-[1px] hover:border-[#17449c] hover:text-[#ec3541] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/servicios">Servicios</a>
                <a className="p-2 border-b-[1px] border-[#17449c] w-full flex justify-end hover:bg-[#dadddf] hover:border-[1px] hover:border-[#17449c] hover:text-[#ec3541] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/encuentranos">Encuentranos</a>
                <a className="p-2 border-b-[1px] border-[#17449c] w-full flex justify-end hover:bg-[#dadddf] hover:border-[1px] hover:border-[#17449c] hover:text-[#ec3541] md:border-0 md:w-auto md:pr-6 md:pl-6 md:rounded" href="/empresas">Empresas</a>
            </nav>
        </header>
    )
}