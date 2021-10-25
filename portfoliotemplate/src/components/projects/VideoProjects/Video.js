import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTubeEmbed from "./YouTubeEmbed";

function VideoWork(props) {

    let videoData = props.data;
    
  console.log("here's what reached VideoWork ", videoData);

  return (
    <>
      <div className="video-responsive">
        <h2 className="text-center page-title">Video Editing</h2>
        <hr></hr>
        <Row xs={3} md={6} lg={6}>
          <Col>
            {
                videoData.map((videoID, i) => (
                <YouTubeEmbed key={i} embedId={videoID.embedid}/>
              
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default VideoWork;
