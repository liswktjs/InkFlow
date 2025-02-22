import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { SentenceItemType } from '../type';
import { SentenceQueryKey } from '../key';
import { QueryOptionsType } from '../../type/queryUtilType';

export type GetLibrarySentenceResponseType = SentenceItemType[];

interface GetLibrarySentenceRequestType {
  libraryId: string;
}

const getLibrarySentence = async ({
  libraryId,
}: GetLibrarySentenceRequestType): Promise<GetLibrarySentenceResponseType> => {
  const response = await fetch(`${API_HOST}/sentences?libraryId=${libraryId}`);

  if (!response.ok) throw new Error('fail to fetch library sentences');

  return response.json();
};

interface Props extends GetLibrarySentenceRequestType {
  options?: QueryOptionsType<GetLibrarySentenceResponseType, Error>;
}

const useGetLibrarySentence = ({
  options,
  libraryId,
}: Props): UseQueryResult<GetLibrarySentenceResponseType, Error> => {
  return useQuery({
    queryKey: SentenceQueryKey.librarySentenceList(libraryId),
    queryFn: () => getLibrarySentence({ libraryId }),
    ...options,
  });
};

export default useGetLibrarySentence;
