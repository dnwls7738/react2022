import React from 'react'

function YouTubeCont() {
  return (
    <section id='youtube__cont'>
      <div className='container'>
        <div className='youtube__inner'>
            <figure className='youtube__img'>
              <h3>웹표준 사이트 만들기</h3>
              <a href="/"><img src="img/script01.png" alt="" /></a>
            </figure>
            <div className='youtube__txt'>
                <figure className='img'>
                  <a href="/"><img src="img/site01.jpg" alt="" /></a>
                </figure>
                <table className='table'>
                <colgroup>
                  <col style={{width: "20%"}} />
                  <col style={{width: "80%"}} />
                </colgroup>
                  <tbody>
                    <tr>
                      <td>레이아웃</td>
                      <td>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</td>
                    </tr>
                    <tr>
                      <td>플러그인</td>
                      <td>제이쿼리를 통하여 이미지슬라이드, 라이트 박스를 구현합니다. 스크립트가 어려울 수 있지만 간단하게 설치하여 작동시켜 봅니다.</td>
                    </tr>
                    <tr>
                      <td>CSS</td>
                      <td>CSS의 다양한 속성을 사용하여 사이트의 디자인 작업을 구성합니다. CSS는 통해 디자인을 어떻게 꾸미는지 알아봅니다.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  )
}

export default YouTubeCont
