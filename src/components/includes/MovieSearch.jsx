import React, {useRef} from 'react'

function MovieSearch({ onSearch }) {

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
    <div className='movie__search container'>
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

export default MovieSearch