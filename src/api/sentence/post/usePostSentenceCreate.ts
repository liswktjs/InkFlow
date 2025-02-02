import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { MutationOptionsType } from '../../type/queryUtilType';
import { SentenceItemType } from '../type';

export interface PostSentenceCreateRequestType {
  author: string;
  libraryId: string;
  content: string;
}

const postSentenceCreate = async ({
  author,
  libraryId,
  content,
}: PostSentenceCreateRequestType): Promise<SentenceItemType> => {
  const response = await fetch(`${API_HOST}/sentences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author,
      libraryId,
      content,
    }),
  });

  if (!response.ok) throw Error('fail to create sentence');

  return response.json();
};

interface Props {
  options?: MutationOptionsType<
    SentenceItemType,
    Error,
    PostSentenceCreateRequestType,
    unknown
  >;
}

const usePostSentenceCreate = ({
  options,
}: Props): UseMutationResult<
  SentenceItemType,
  Error,
  PostSentenceCreateRequestType,
  unknown
> => {
  return useMutation({
    mutationFn: postSentenceCreate,
    ...options,
  });
};

export default usePostSentenceCreate;
