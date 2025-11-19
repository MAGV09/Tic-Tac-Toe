import { Fragment } from "react";


function Scoreboard({title, content}) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}
export default Scoreboard;
