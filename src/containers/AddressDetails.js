import React from 'react';

const AddressDetails = (props) => {
    const { comments, points, title, index, url, author, timeDiff } = props;

    return (
        <div className={index % 2 === 0 ? "row-news-odd col-12" : "row-news col-12"}>
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
                    <div>
                        {title}
                    </div>
                    <div className="details">
                        <div className="detail-url">
                            (<a href={url} target="blank">{url}</a>) by
                        </div>
                        <div className="detail-author">
                            {author}
                        </div>
                        <div className="detail-time">
                            {timeDiff} hours ago
                        </div>
                        <div className="detail-hide">
                            [hide]
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddressDetails;