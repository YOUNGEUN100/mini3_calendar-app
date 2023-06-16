import React from 'react'

function Calender() {
  // 1. 현재의 년월일 조회
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  console.log("오늘 : ",year,month+1,date);

  // 2. 해당 월의 말일 구하기
  let lastDate = new Date(year,month+1,0).getDate();
  console.log("말일 : " + lastDate);

  // 3. 달력에서 시작할 위치(요일)
  let start_date = new Date(year, month, 1).getDay();
  console.log("시작요일 : " +start_date);

  return (
    <div className="calender">
      <header>
        <h2>{year}</h2>
        <span>{month+1}월</span>
        <ul>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
      </header>
      <main>
        달력
      </main>
    </div>
  )
}

export default Calender