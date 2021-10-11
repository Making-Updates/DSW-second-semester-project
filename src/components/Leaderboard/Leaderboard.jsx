const Leaderboard = ({ data }) => {
	return (
		<div>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Score</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<th scope='row'>{index + 1}</th>
							<td>{row.email}</td>
							<td>{row.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
