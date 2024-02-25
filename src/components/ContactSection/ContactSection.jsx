import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ProfileAvatar } from '../HeroSection/components/ProfieAvatar';
import { green_dot } from '../../assets';
import './ContactSection.css';
import { BsLinkedin, BsGithub, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { socialLinks } from '../../constants/index.js';
import { BiLogoTelegram } from 'react-icons/bi';

const item = {
	// hidden: { opacity: 0, scale: 0 },
	hidden: { opacity: 0, y: 75 },
	show: index => ({
		opacity: 1,
		// scale: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: index * 0.1,
		},
	}),
};

function ContactSection(props) {
	return (
		<motion.div
			id={'contact'}
			variants={item}
			initial='hidden'
			whileInView='show'
			viewport={{
				once: true,
			}}
			className='mt-20 mx-6 '>
			<SectionTitle mainTitle={'Contact'} />
			<div className='group max-w-5xl bg-red rounded-2xl mx-auto my-10 contact-container'>
				<div className='p-8 flex flex-col space-y-3'>
					<div className='flex align-items-center space-x-4'>
						<ProfileAvatar size={3.5} />
						<div className='outlined-container outline-2 outline-white text-center px-4 py-2 my-auto'>
							<img className='inline m-auto' src={green_dot} alt='' />
							<span className='ml-3 text-gray-300 text-sm'>
								Available for work
							</span>
						</div>
					</div>
					<div className='md:flex'>
						<div className='md:basis-1/2'>
							<h1 className='text-lg'>
								Drop me a line or say 👋 on social networks
							</h1>
							<p className='text-slate-500 mt-4'>
								{
									"Whether you're a business or startup seeking to transform your ideas into exceptional mobile and web applications, I'm here to collaborate and bring your vision to life. Feel free to reach out, and let's turn your ideas into reality! 💻📱"
								}
							</p>
						</div>
						<div className='md:basis-1/2 md:m-auto mt-4 flex flex-col justify-center space-y-5'>
							<div className='flex space-x-8 justify-center'>
								<a
									href={socialLinks.linkedIn}
									target='_blank'
									rel='noopener noreferrer'>
									<BsLinkedin
										className='fill-gray-400 hover:fill-white transition duration-300'
										size={28}
									/>
								</a>
								<a
									href={socialLinks.github}
									target='_blank'
									rel='noopener noreferrer'>
									<BsGithub
										className='fill-gray-400 hover:fill-white transition duration-300'
										size={28}
									/>
								</a>
								<a
									href={socialLinks.whatsapp}
									target='_blank'
									rel='noopener noreferrer'>
									<BsWhatsapp
										className='fill-gray-400 hover:fill-white transition duration-300'
										size={28}
									/>
								</a>
								<a
									href={socialLinks.telegram}
									target='_blank'
									rel='noopener noreferrer'>
									<BiLogoTelegram
										className='fill-gray-400 hover:fill-white transition duration-300'
										size={28}
									/>
								</a>
							</div>
							<a
								href={`mailto:${socialLinks.email}`}
								className={
									'btn-container text-center mx-auto text-gray-300 text-sm bg-fgray-500 text-white px-3 py-3 rounded-md'
									// hover:from-primary_blue hover:to-primary_cyan "
								}>
								{socialLinks.email}
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

ContactSection.propTypes = {};

export default ContactSection;
