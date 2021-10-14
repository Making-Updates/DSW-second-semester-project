import './mlh.css'

const MLH = () => {
    return (
        <div className="hackathonWrapper">
            <div className="mlhCard">
                <div className="image-wrap">
                    <img src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/208/583/thumb/239946644_568252921043481_6318917730420098257_n.png?1631565164" alt="img" />

                </div>
                <div className="logo">
                    <img src="https://s3.amazonaws.com/assets.mlh.io/events/logos/000/208/583/thumb/143223143_4081538598531758_2947854738040062182_n.png?1631565164" alt="logo"/>
                </div>
                <h3 className="hackathonName" itemprop="name">Hack the Valley</h3>
                <p className="hackathonDate">Oct 15th - 17th</p>
                <div className="hackathonLocation" itemprop="location">
                    <span itemprop="city">Everywhere</span>,
                    <span itemprop="state">Worldwide</span>
                </div>
                <div className="hackathonHybridNotes">
                    <span>Digital Only</span>
                </div>
            </div>
        </div>
    )
}

export default MLH
