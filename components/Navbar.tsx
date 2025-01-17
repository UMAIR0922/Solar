import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import TopBlueBar from './items/TopBlueBar'

const Navbar = () => {
  return (
    <>
     <div style={{ position: 'sticky', top: 0, zIndex: 999 }} className="flex flex-col">
        <TopBlueBar/>
      
        <div
          className="flex w-full max-w-full justify-between gap-5 mt-0 py-3 bg-white max-md:max-w-full max-md:flex-wrap"
        >
          <Link href="/">
            <Image
              width={1080}
              height={1080}
              alt='Logo'
              loading="lazy"
              src="/solar-logo.png"
              className="aspect-[3.57] object-contain object-center w-[182px] overflow-hidden shrink-0 max-w-full"
            />
          </Link>
          <div
            className="self-center flex items-start justify-between gap-5 my-auto px-5 max-md:max-w-full max-md:flex-wrap"
          >
            <Link href="/shop" passHref
              className="text-neutral-700 hover:font-semibold hover:border-b-2 hover:border-yellow-400 hover:border-collapse text-base leading-6 tracking-tight self-center whitespace-nowrap my-auto"
            >
              Webshop 
            </Link>
            <Link href="/services" passHref
              className="text-neutral-700 text-base leading-6 hover:font-semibold hover:border-b-2 hover:border-yellow-400 hover:border-collapse tracking-tight self-center my-auto"
            >
              Services
            </Link>
            <Link href="/about-us" passHref
              className="text-neutral-700 text-base hover:font-semibold hover:border-b-2 hover:border-yellow-400 hover:border-collapse leading-6 tracking-tight self-center my-auto"
            >
              Über uns
            </Link>
            <Link href="/blog" passHref
              className="text-neutral-700 text-base hover:font-semibold hover:border-b-2 hover:border-yellow-400 hover:border-collapse leading-6 tracking-tight self-center my-auto"
            >
              Ratgeber
            </Link>
            <div
              className="text-neutral-700 text-base leading-6 tracking-tight self-center my-auto"
            >
              <i className="fa-regular fa-heart"></i>
            </div>
            <div
              className="text-neutral-700 text-base leading-6 tracking-tight self-center my-auto"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div
              className="text-neutral-700 text-base leading-6 tracking-tight self-center my-auto"
            >
              <i className="fa-regular fa-user"></i>
            </div>
            <Link href="/contact" passHref
              className="hover:bg-yellow-400 border border-neutral-500 hover:border-none rounded-lg self-stretch flex items-stretch justify-between gap-2 px-3 py-2.5 text-neutral-700 text-base font-medium grow whitespace-nowrap"
            >
                Angebot berechnen
              <div
                className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
              >
                <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar