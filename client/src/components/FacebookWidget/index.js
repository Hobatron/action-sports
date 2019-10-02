import React from 'react';
import './FacebookWidget.css';

function FacebookWidget() {
    return (
        <div id="facebook-widget">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActionSportsGames&tabs=timeline&width=350px&height=1060px&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=598894817281877"
                width="350px" height="1060px"
                scrolling="no" frameBorder="0"
                allow="encrypted-media" title="facebookWidget"></iframe>
        </div>
    )
}

export default FacebookWidget;