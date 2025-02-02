import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { RecordItemType } from '../type';
import { MutationOptionsType } from '../../type/queryUtilType';

export interface PostRecordCreateRequestType {
  sentenceId: string;
  sentence: string;
}

const postRecordCreate = async ({
  sentence,
  sentenceId,
}: PostRecordCreateRequestType): Promise<RecordItemType> => {
  const response = await fetch(`${API_HOST}/records`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sentence,
      sentenceId,
      createdAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) throw Error('fail to create record');

  return response.json();
};

interface Props {
  options?: MutationOptionsType<
    RecordItemType,
    Error,
    PostRecordCreateRequestType,
    unknown
  >;
}

const usePostRecordCreate = ({
  options,
}: Props): UseMutationResult<
  RecordItemType,
  Error,
  PostRecordCreateRequestType,
  unknown
> => {
  return useMutation({
    mutationFn: postRecordCreate,
    ...options,
  });
};

export default usePostRecordCreate;
