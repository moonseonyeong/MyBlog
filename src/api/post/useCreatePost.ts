import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '..';
import { PostDataType } from '@/components/blocks/MarkdownPreview/types';
import { UseMutationOptionsType } from '../types';

interface CreatePostRes {
  status: boolean;
}

const createPost = async (post: PostDataType) => {
  const { data } = await api.post<CreatePostRes>('/posts', { post });

  return data;
};

export const useCreatePost = (options?: UseMutationOptionsType<CreatePostRes, PostDataType>) => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    ...options,
  });
};
