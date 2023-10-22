import { getPosts } from '@/api/post/getPosts';
import { prisma } from '@/lib/prisma';
import axios from 'axios';
import { MetadataRoute } from 'next';

interface BlogData {
  id: number;
  title: string;
  date: string;
}
const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export default async function sitemap() {
  const posts = await getPosts();

  // const url = `/posts`;
  // const response = await axios.get(url);
  // const response = await fetch(`http://localhost:3000/api/posts`);

  // const response = await prisma.posts.findMany();

  // console.log(response);

  // const _postsUrl = _posts.map((post: BlogData) => ({
  //   url: `${BASE_URL}/post/${post.id}`,
  //   lastModified: post.date,
  // }));

  return [
    {
      url: '/',
      lastModified: new Date(),
    },
  ];
}
