import React from 'react';

const Comments = (props)=>{
const comments = props.comment ? (
    <span>
      {JSON.stringify(props.comment)
        .substr(2, JSON.stringify(props.comment).length - 4)
        .split(",")
        .map((com, index) => (
          <span className="comments" style={{ display: "block" }} key={index}>
            {com}
          </span>
        ))}
    </span>
  ) : null;
  return <span>{comments}</span>;
        }
export default Comments;