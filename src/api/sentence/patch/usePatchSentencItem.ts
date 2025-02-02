import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { SentenceItemType } from '../type';
import { MutationOptionsType } from '../../type/queryUtilType';

export interface PatchSentenceItemRequestType {
  id: string;
  author?: string;
  content?: string;
}

const patchSentenceItem = async ({
  id,
  author,
  content,
}: PatchSentenceItemRequestType): Promise<SentenceItemType> => {
  const response = await fetch(`${API_HOST}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author,
      content,
    }),
  });

  if (!response.ok) throw Error('fail to update sentence');

  return response.json();
};

interface Props {
  options?: MutationOptionsType<
    SentenceItemType,
    Error,
    PatchSentenceItemRequestType,
    unknown
  >;
}

const usePatchSentenceItem = ({
  options,
}: Props): UseMutationResult<
  SentenceItemType,
  Error,
  PatchSentenceItemRequestType,
  unknown
> => {
  return useMutation({
    mutationFn: patchSentenceItem,
    ...options,
  });
};

export default usePatchSentenceItem;
