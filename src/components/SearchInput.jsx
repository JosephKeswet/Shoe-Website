import React from 'react'

const SearchInput = () => {
  return (
    <div>    
        <div className="search__input">
        <form action="">
      <input type="text" className='search__field' placeholder='' />
      {/* <button className='search__button'>SEARCH</button> */}
      <input type="submit" className='search__button'  value="Search" />
        </form>
        </div>
    </div>
  )
}

export default SearchInput