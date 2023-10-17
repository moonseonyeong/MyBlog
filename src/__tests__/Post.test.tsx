import { render, screen } from '@testing-library/react';
import { wrapper } from '@/utils/testHelper';
import Post from '@/components/blocks/Post';

it('should render the post component', async () => {
  render(wrapper(<Post />));

  const postElement = screen.getByText('Post');

  expect(postElement).toBeInTheDocument();
});
