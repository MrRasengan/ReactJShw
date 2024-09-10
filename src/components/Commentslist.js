import React, { useState } from 'react';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'Замечательный пост!' },
    { id: 2, text: 'Спасибо за интересный контент!' },
    { id: 3, text: 'Это действительно полезно.' },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;