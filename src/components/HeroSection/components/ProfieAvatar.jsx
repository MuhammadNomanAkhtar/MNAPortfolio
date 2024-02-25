import PropTypes from 'prop-types';

// import profileImage3x from "../../../assets/ProfilePicture3x.png";
import { ahsan_profile4 } from '../../../assets';
// import profileImage4x from '../assets/ProfilePicture3x.png'
export const ProfileAvatar = ({ size, src, className }) => {
	size = size || 12;
	console.log('size', size);

	// src = src || profileImage3x;
	src = src || ahsan_profile4;
	return (
		<div className={className + ' flex justify-center items-center'}>
			<img
				src={src}
				// className={`w-[${size}rem] h-[14rem] text-center`}
				style={{ width: `${size}rem`, height: `${size}rem` }}
				// className={`w-[${size}] h-[${size}] text-center`}
				alt='Profile Picture'
			/>
		</div>
	);
};
ProfileAvatar.propTypes = { size: PropTypes.number, src: PropTypes.string };
