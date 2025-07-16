import { render, screen } from '@testing-library/react';
import ArticleCard from '../components/ArticleCard';

const mockArticle = {
  title: 'Test Title',
  description: 'This is a test description.',
  author: 'John Doe',
  url: 'https://example.com',
  urlToImage: 'https://example.com/image.jpg',
  publishedAt: '2025-07-15T10:00:00Z',
};

describe('ArticleCard', () => {
  it('renders title, description, and author', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });
});
