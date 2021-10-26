import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTubeEmbed from "./YouTubeEmbed";



function VideoWork({title, data}) {
  let videoData = data.works;


  return (
    <>
      <div className="px-3">
        <h2 className="text-center page-title">{title}</h2>
        <hr></hr>
        <Row xs={2} md={3} lg={3}>
          {videoData.map((videoID, i) => (
            <Col key={i} className="pt-3">
              <YouTubeEmbed  embedId={videoID.embedid} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default VideoWork;
