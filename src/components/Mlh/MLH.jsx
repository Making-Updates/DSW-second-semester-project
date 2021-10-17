import './mlh.css';

const MLH = ({ data, itemNo }) => {
	return (
		<a href={data.url} style={{ textDecoration: 'none' }}>
			<div className='hackathonWrapper' key={itemNo}>
				<div className='mlhCard'>
					<div className='image-wrap'>
						<img src={data.imageWrapUrl} alt='img' />
					</div>
					<div className='logo'>
						<img src={data.eventLogoUrl} alt='logo' />
					</div>
					<h3 className='hackathonName' itemProp='name'>
						{data.name}
					</h3>
					<p className='hackathonDate'>{data.eventDate}</p>
					<div className='hackathonLocation' itemProp='location'>
						{data.eventLocation}
					</div>
					<div className='hackathonHybridNotes'>
						<span>{data.eventHybridNotes}</span>
					</div>
				</div>
			</div>
		</a>
	);
};

export default MLH;
