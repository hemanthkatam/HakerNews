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
            const hiddenItems = localStorage.getItem('HideNews') ? localStorage.getItem('HideNews').split(',') : [];
            let updatedData = data;
            if(hiddenItems.length >0){
                updatedData =data.filter((ele,idx)=> hiddenItems.indexOf(ele.objectID.toString()) === -1)
            }
            this.setState({ pagedata: updatedData })
            console.log(data)
        })
    }
    updateUpVote = (index) => {
        const { pagedata } = this.state;
        pagedata[index]['points']+=1;
        this.setState({
            pagedata
        })
    };
    hideNews = (id) => {
        let { pagedata } = this.state;
        const hiddenItems = localStorage.getItem('HideNews') ? localStorage.getItem('HideNews').split(',') : [];
        hiddenItems.push(pagedata[id].objectID);
        localStorage.setItem('HideNews',hiddenItems);
        pagedata.splice(id,1)
        this.setState({pagedata})
    };
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
                    updateUpVote={this.updateUpVote}
                    hideNews={this.hideNews}
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