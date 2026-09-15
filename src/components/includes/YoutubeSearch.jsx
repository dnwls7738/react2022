import React, {useRef} from 'react'
// YouTube 검색어 입력을 받고 검색 콜백을 실행합니다.

function YoutubeSearch({ onSearch }) {

  const inputRef = useRef()
  
  const hadleSearch = () => {

    const value = inputRef.current.value;
    onSearch(value)
  }

  const onKeyPress = (event) => {
    if(event.key === "Enter"){
      // console.log("onKeyPress")
      hadleSearch();
    }
  }

  const onClick = () => {
    // console.log("onClick")
    hadleSearch();
  }

  return (
    <div className='youtube__search container'>
      <h2>검색하기</h2>
      <input 
        ref={inputRef}
        type="search" 
        placeholder='검색어를 입력하세요' 
        onKeyPress={onKeyPress}
      />

      <button 
      type='submit' 
      onClick={onClick}>
        검색
      </button>
    </div>
  )
}

export default YoutubeSearch