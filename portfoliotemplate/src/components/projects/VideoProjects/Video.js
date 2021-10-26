import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTubeEmbed from "./YouTubeEmbed";



function VideoWork(props) {
  let videoData = props.data;

  return (
    <>
      <div className="px-3">
        <h2 className="text-center page-title">Video Editing</h2>
        <hr></hr>
        <Row xs={2} md={3} lg={3}>
          {videoData.map((videoID, i) => (
            <Col className="pt-3">
              <YouTubeEmbed key={i} embedId={videoID.embedid} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default VideoWork;
