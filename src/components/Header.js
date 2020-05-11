import React from 'react';

const Header = (props) => {

    return (
        <div className="header-main d-flex">
            <div className="col-1">
                Comments
            </div>
            <div className="col-1">
                Vote Count
            </div>
            <div className="col-1">
                UpVote
            </div>
            <div className="col-12">
                <div className="news-title">
                    News Details
                </div>
            </div>
        </div>
    )
}

export default Header;