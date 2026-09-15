import React from "react";
// YouTube 검색 결과 배열을 여러 영상 카드로 렌더링합니다.
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
  //console.log(props)
  return (
    <div className="youtube__list">
      <ul>
        {props.videos.map((video, index) => (
          <YoutubeItem key={index} video={video} />
        ))}
      </ul>
    </div>
  );
}

export default YoutubeList;
