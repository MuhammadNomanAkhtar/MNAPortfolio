import { NavLink } from './NavLink';
import { NavButtonLink } from './NavButtonLink';
import { Logo } from './Logo';
import { NavGeneralLink } from './NavGeneralLink';
import React, { useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import './Header.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { NavLinkWrapper } from './NavLinkWrapper.jsx';
import { socialLinks } from '../../constants/index.js';

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const menutranstionDuration = '0.09s';
	const closeMenu = () => {
		setMenuOpen(false);
	};
	const menuRef = useRef();

	return (
		<header className='sticky font-medium top-0 left-0 right-0 z-30 bg-background'>
			<div className='p-3 flex justify-between items-center w-full max-w-7xl mx-auto'>
				<div className='flex space-x-3 items-center'>
					<Logo />
					<div className='hidden lg:flex ml-4 space-x-2'>
						<NavLinkWrapper>
							<a
								href={socialLinks.linkedIn}
								target='_blank'
								rel='noopener noreferrer'>
								<BsLinkedin size={20} />
							</a>
						</NavLinkWrapper>

						<NavLinkWrapper>
							<a
								href={socialLinks.github}
								target='_blank'
								rel='noopener noreferrer'>
								<BsGithub size={20} />
							</a>
						</NavLinkWrapper>
					</div>
				</div>
				<div className='hidden md:flex space-x-3'>
					{' '}
					{/* Hide this div on screens smaller than md breakpoint */}
					<NavLink text='Works' href='/#works' />
					<NavLink text='Experiences' href='/#experiences' />
					<NavLink text='Testimonials' href='/#testimonials' />
					<NavLink text='Services' href='/#services' />
					<NavButtonLink href='#contact' text='Contact me' />
				</div>
				<div className='md:hidden flex items-center'>
					{' '}
					{/* Hide this div on screens larger than md breakpoint */}
					<Hamburger size={24} toggled={isMenuOpen} toggle={setMenuOpen} />
				</div>
				{/* Show this div when the menu icon is clicked */}
			</div>

			{/* <motion.div
        ref={menuRef}
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        className={`mobile-menu w-screen -z-10 bg-background absolute md:hidden h-screen flex flex-col space-y-2 ${
          isMenuOpen ? "show" : ""
        }`}
        // style={{
        //   translate: isMenuOpen ? "translateY(0)" : "translateY(-100)",
        //   transition: "opacity 0.3s, transform 0.3s",
        // }}
      >
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <NavLink text="Works" href="/#works" onClick={closeMenu} />
        </motion.div>
        <NavLink text="Experiences" href="/#experiences" onClick={closeMenu} />
        <NavLink text="Services" href="/#services" onClick={closeMenu} />
        <NavButtonLink
          onClick={closeMenu}
          href="mailto:contact@faizanmalik.com"
          text="contact@faizanmalik.com"
        />
      </motion.div> */}

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						transition={
							{
								// type: "just"
							}
						}
						initial={{
							transitionDuration: menutranstionDuration,
							opacity: 0,
							y: '-100vh',
						}}
						animate={{
							transitionDuration: menutranstionDuration,
							opacity: 1,
							y: 0,
						}}
						exit={{
							transitionDuration: menutranstionDuration,
							opacity: 0,
							y: '-100vh',
						}}
						ref={menuRef}
						className={`bg-background -z-10 absolute w-full h-screen md:hidden px-4 md:px-0 flex flex-col space-y-2 show`}>
						<NavLink text='Works' href='/#works' onClick={closeMenu} />
						<NavLink
							text='Experiences'
							href='/#experiences'
							onClick={closeMenu}
						/>
						<NavLink
							text='Testimonials'
							href='/#testimonials'
							onClick={closeMenu}
						/>
						<NavLink text='Services' href='/#services' onClick={closeMenu} />
						<NavButtonLink
							onClick={closeMenu}
							href='#contact'
							text='Contact me'
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
