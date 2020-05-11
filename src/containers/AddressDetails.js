import React from 'react';

const AddressDetails = (props) => {
    const { comments, points, title,index } = props;

    return (
        <div className={index%2 === 0 ? "row-news-odd col-12" : "row-news col-12"}>
            <div className="comments col-1">
                {comments}
            </div>
            <div className="vote-count col-1">
                {points}
            </div>
            <div className="upvote col-1">

            </div>
            <div className="news-details col-12">
                <div className="news-title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default AddressDetails;