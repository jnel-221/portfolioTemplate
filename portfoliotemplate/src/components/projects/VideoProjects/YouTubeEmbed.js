import React from "react";


const YouTubeEmbed = ({embedId}) => {
    console.log("here's what reached YouTubeEmbed",embedId)

    return(
        <div>
            <iframe
            width='560'
            height='315'
            src= {`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gryoscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    )

}

export default YouTubeEmbed;