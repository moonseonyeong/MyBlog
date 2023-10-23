import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface UseQueryOptionsType<T> extends UseQueryOptions<T, AxiosError<any>, T, any[]> {}

export interface UseMutationOptionsType<T, K> extends UseMutationOptions<T, AxiosError, K, any> {}
