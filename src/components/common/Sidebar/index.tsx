import { getCategories } from '@/api/category/getCategories';
import SidebarComponent from './SidebarComponent';

export default async function Sidebar() {
  const categories = await getCategories();

  return <SidebarComponent categories={categories} />;
}
