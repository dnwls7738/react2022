import React from 'react'
// 페이지 전환이나 데이터 요청 중 표시하는 공통 로딩 화면입니다.

function Loading(props) {
  return (
    <div id='loading' className={`loading__active ${props.color}`}>
        <div className="loading__text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
    </div>
  )
}

export default Loading
