import React from 'react';
import SearchBar from '../component/TotalLessons/SearchBar';
import LessonListFliter from '../component/TotalLessons/LessonListFliter';
import LessonList from '../component/TotalLessons/LessonList';
import LessonFoodCategory from '../component/TotalLessons/LessonFoodCategory';
function totalLessons() {
  return (
    <div>
      <div>
        <h3>
          수업 전체
        </h3>
        <div>
          실력 있는 선생님들과 직접 나만의 요리를 완성해보세요!
        </div>
      </div>
      <SearchBar/>
      <LessonFoodCategory/>
      <LessonListFliter/>
      <LessonList/>
    </div>
  );
}

export default totalLessons;