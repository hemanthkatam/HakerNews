import React from 'react';
import AddressDetails from './AddressDetails';
import Header from '../components/Header';
const axios = require('axios');

class HakerNewsBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagedata: []
        }
    }
    componentDidMount() {
        axios.get('http://hn.algolia.com/api/v1/search?tags=front_page').then(response => {
            const data = response.data.hits;
            this.setState({ pagedata: data })
            console.log(data)
        })
    }
    render() {
        const { pagedata } = this.state;
        return (
            <div className="news-main">
                <Header />
                {pagedata.map((news, idx) => <AddressDetails
                    comments={news.num_comments}
                    points={news.points}
                    title={news.title}
                    index={idx}
                    key={idx}
                />)}
                <div className="button-contaner d-flex">
                    <div className="prev-button">Previous</div> <div className="vd-devider"></div> <div className="prev-button">Next</div>
                </div>
                <div className="devider"> </div>
                <div className="chart-contaner">

                </div>
            </div>
        )
    }
}

export default HakerNewsBase;