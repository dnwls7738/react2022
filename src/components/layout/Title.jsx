import React from 'react'
// 각 페이지 상단의 제목과 장식 요소를 표시합니다.

function Title(props) {
  return (
    <section className={`cont__title ${props.color}`}>
        <div className="container">
            <h1>
                <strong>{props.title[0]}</strong>
                <em>{props.title[1]}</em>
            </h1>
        </div>
    </section>
  )
}

export default Title
