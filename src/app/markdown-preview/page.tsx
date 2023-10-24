import { getCategories } from '@/api/category/getCategories';
import MarkdownPreview from '@/components/blocks/MarkdownPreview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

export default async function MarkdownPreviewPage() {
  const categories = await getCategories();

  return <MarkdownPreview categories={categories} />;
}
