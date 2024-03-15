/* eslint-disable*/
import { memo, useState } from "react";
import "./Header.css";

function Header() {
  const [date, setDate] = useState<Date>(new Date());
  console.log(setDate);

  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{date.toDateString()}</h1>
    </div>
  );
}

export default memo(Header);
