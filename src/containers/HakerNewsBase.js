import React from 'react';
import AddressDetails from './AddressDetails';
import Header from '../components/Header';
import ChartContainer from '../components/ChartContainer';
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
                    url={news.url ? news.url.split('/')[2] : ''}
                    author={news.author}
                    timeDiff={parseInt(Math.abs((new Date().getTime()-new Date(news.created_at).getTime()))/3600000)}
                />)}
                <div className="button-contaner d-flex">
                    <div className="prev-button">Previous</div> <div className="vd-devider"></div> <div className="prev-button">Next</div>
                </div>
                <div className="devider"> </div>
                <div className="chart-contaner">
                    <ChartContainer data={pagedata}/>
                </div>
            </div>
        )
    }
}

export default HakerNewsBase;