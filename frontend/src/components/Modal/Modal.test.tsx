import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders the title', () => {
    const title = 'Mamma Mia';
    render(<Modal title={title} />);

    const titleEl = screen.getByTestId('modal-title');
    expect(titleEl).toBeInTheDocument();
    expect(titleEl.innerHTML).toBe(title);
  });

  test('shows up if its open', () => {
    const title = 'Mamma Mia';
    render(<Modal title={title} isOpen />);

    const outerEl = screen.getByTestId('modal-outer');
    expect(outerEl.classList).not.toContain('hidden');
  });

  test('hides if its not open', () => {
    const title = 'Mamma Mia';
    render(<Modal title={title} />);

    const outerEl = screen.getByTestId('modal-outer');
    expect(outerEl.classList).toContain('hidden');
  });
});
