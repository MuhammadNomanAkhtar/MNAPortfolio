import logo from '../../assets/Profile-Logo.svg';

export const Logo = () => {
	return (
		<>
			<a href='/'>
				{' '}
				<img className={'w-full'} src={logo} alt='logo' />{' '}
			</a>
		</>
	);
};
