import { render, screen, fireEvent, act } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve adicionar dois comentários', () => {
        render(<Post />);

        const textarea = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /comentar/i });

        act(() => {
            fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
            fireEvent.click(button);
        });

        act(() => {
            fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
            fireEvent.click(button);
        });

        const comments = screen.getAllByText(/comentário/i);
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});