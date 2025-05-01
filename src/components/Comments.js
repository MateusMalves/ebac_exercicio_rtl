import React, { useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (input.trim() !== '') {
      setComments([...comments, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite seu comentário"
      />
      <button data-testid="submit-button" onClick={handleAddComment}>
        Adicionar Comentário
      </button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} data-testid="comment-item">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
