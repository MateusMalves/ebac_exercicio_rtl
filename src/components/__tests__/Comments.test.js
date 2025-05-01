import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from '../Comments';

test('deve inserir dois comentários', () => {
  render(<Comments />);

  const input = screen.getByTestId('comment-input');
  const button = screen.getByTestId('submit-button');

  act(() => {
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);
  });

  act(() => {
    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);
  });

  const comments = screen.getAllByTestId('comment-item');
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent('Primeiro comentário');
  expect(comments[1]).toHaveTextContent('Segundo comentário');
});
