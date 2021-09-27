import React from 'react'

const Leaderboard = ({data}) => {
    console.log("component" + data);
    return (
        <div>
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{row.email}</td>
                    <td>{row.score}</td>
                </tr>
            ))}
            </tbody>
            </table>
            {/* <table>
                    <thead>
                        <tr>
                            <th className="title">Player Name</th>
                            <th className="title">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        // content will be manipulated with javascript
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Tiiso</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table> */}
        </div>
    )
}

export default Leaderboard
