import React from 'react'
// 영화 검색 결과 배열을 여러 카드로 렌더링합니다.
import MovieItem from './MovieItem';

function MoiveList(props) {
    //console.log(props)
  return (
    <div className='movie__list'>
      <ul>
          {props.videos.map((list,index)=>(
              <MovieItem key={index} video={list} />
          ))}
      </ul>
    </div>
  )
}
export default MoiveList