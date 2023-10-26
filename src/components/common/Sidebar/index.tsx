import { getCategories } from '@/api/category/getCategories';
import SidebarComponent from './SidebarComponent';

export default async function Sidebar() {
  const data = await getCategories();

  return <SidebarComponent categories={data.categories} totalPostsCount={data.totalPostsCount} />;
}
