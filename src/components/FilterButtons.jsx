import React from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ Students, setFilteredStudents }) {
  const filterByAge = (minAge) => {
    const filteredByAge = Students.filter((student) => {
      return student.age >= minAge;
    });
    setFilteredStudents(filteredByAge);
  };
  const filterByGrade = (grade) => {
    const filteredByGrade = Students.filter((student) => {
      return student.grade === grade;
    });
    setFilteredStudents(filteredByGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(Students);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
