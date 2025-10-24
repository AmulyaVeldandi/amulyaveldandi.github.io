import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies neutral variant class by default', () => {
    const { container } = render(<Badge>Neutral</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge-neutral');
  });

  it('applies outline variant class', () => {
    const { container } = render(<Badge variant="outline">Outline</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge-outline');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-class">Custom</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('custom-class');
  });
});
