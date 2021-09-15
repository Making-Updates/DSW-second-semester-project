import loadingIcon from './loadingIcon.svg';

function LoadingIcon() {
	return (
		<>
			<div className='container'>
				<div className='row h-25 w-25 mx-auto d-block'>
					<img src={loadingIcon} alt='Loading...' />
				</div>
			</div>
		</>
	);
}

export default LoadingIcon;
