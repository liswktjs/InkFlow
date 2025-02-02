import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type QueryOptionsType<R, E> = Omit<
  UseQueryOptions<R, E>,
  'queryKey' | 'queryFn'
>;

export type MutationOptionsType<R, E, V, C> = Omit<
  UseMutationOptions<R, E, V, C>,
  'mutationFn'
>;
