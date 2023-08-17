import React, { useEffect, useState } from 'react';
import { setKeyword, setType, resetlessonSearch, setResult } from '../../store/lesson/lessonSearch';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../../style/lesson/searchBarCss.css';
import { BiSearch } from 'react-icons/bi';
import { setSearchBarKeyword } from '../../store/lesson/searchBarKeyword';

function SearchBar() {
  const dispatch = useDispatch()
  const [keyword, setInputKeyword] = useState('')
  const [type, setInputType] = useState('all')

  const handleSearchBar = (e) => {
    const newKeyword = e.target.value;
    setInputKeyword(newKeyword);
    dispatch(setKeyword(newKeyword))
  }

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setInputType(newType);
    dispatch(setType(newType))
    dispatch(setSearchBarKeyword(''))
  }

  return (
    <div>
      <div className='searchContainer'>
        <select
          onChange={handleTypeChange}
          value={type}
          style={{ marginLeft: '10px' }}
          className='categorySelect'
        >
          <option value="all">전체보기</option>
          <option value="title">과외 제목</option>
          <option value="cookyer">Cookyer 이름</option>
          <option value="ingre">재료</option>
        </select>
        <div className='inputContainer'>
          <input
            type="text"
            placeholder='배우고 싶은 요리를 검색해보세요!'
            style={{ width: '400px' }}
            onChange={handleSearchBar}
            // onMouseEnter={handleInputMouseEnter} // 마우스가 요소에 올라갈 때 실행
            value={keyword}
            className='searchInput'
          />
          <BiSearch className='searchIcon' />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
