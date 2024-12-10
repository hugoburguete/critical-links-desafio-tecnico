import { render, screen } from '@testing-library/react';
import FormSelect from './FormSelect';

describe('FormSelect', () => {
  test('renders the options', () => {
    const label = 'To be';
    const value = 'to-be';

    render(<FormSelect label="label" options={[{ label, value }]} />);

    const option = screen.getByTestId(`option-${value}`);
    expect(option).toBeInTheDocument();
  });
});
