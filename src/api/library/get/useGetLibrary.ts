import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { LibraryItemType } from '../type';
import { QueryOptionsType } from '../../type/queryUtilType';
import { LibraryQueryKey } from '../key';

export type GetLibraryResponseType = LibraryItemType[];

const getLibrary = async (): Promise<GetLibraryResponseType> => {
  const response = await fetch(`${API_HOST}/library`);
  if (!response.ok) throw new Error('fail to fetch library');
  return response.json();
};

interface Props {
  options?: QueryOptionsType<GetLibraryResponseType, Error>;
}

const useGetLibrary = ({
  options,
}: Props): UseQueryResult<GetLibraryResponseType, Error> => {
  return useQuery({
    queryKey: LibraryQueryKey.libraryList(),
    queryFn: getLibrary,
    ...options,
  });
};

export default useGetLibrary;
