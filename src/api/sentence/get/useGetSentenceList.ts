import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { SentenceItemType } from '../type';
import { SentenceQueryKey } from '../key';
import { QueryOptionsType } from '../../type/queryUtilType';

export type GetSentenceResponseType = SentenceItemType[];

const getSentenceList = async (): Promise<GetSentenceResponseType> => {
  const response = await fetch(`${API_HOST}/sentences`);

  if (!response.ok) throw new Error('fail to fetch sentence list');

  return response.json();
};

interface Props {
  options?: QueryOptionsType<GetSentenceResponseType, Error>;
}

const useGetSentenceList = ({
  options,
}: Props): UseQueryResult<GetSentenceResponseType, Error> => {
  return useQuery({
    queryKey: SentenceQueryKey.sentenceList(),
    queryFn: getSentenceList,
    ...options,
  });
};

export default useGetSentenceList;
