import React from "react";
// YouTube 검색 결과 한 건을 영상 카드로 표시합니다.
function YoutubeItem(props) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
        />
        <p>{props.video.snippet.title}</p>
      </a>
    </li>
  );
}

export default YoutubeItem;
