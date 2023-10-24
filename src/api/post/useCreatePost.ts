import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '..';
import { PostDataType } from '@/components/blocks/MarkdownPreview/types';
import { UseMutationOptionsType } from '../types';

interface CreatePostRes {
  status: boolean;
  id: number;
}

interface CreatePostBody {
  postData: PostDataType;
  secret: string;
}

const createPost = async ({ postData, secret }: CreatePostBody) => {
  const { data } = await api.post<CreatePostRes>('/posts', { postData, secret });

  return data;
};

export const useCreatePost = (options?: UseMutationOptionsType<CreatePostRes, CreatePostBody>) => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    ...options,
  });
};
