import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_HOST } from '../../constant';
import { QueryOptionsType } from '../../type/queryUtilType';
import { RecordItemType } from '../type';
import { RecordQueryKey } from '../key';

export type GetRecordListResponseType = RecordItemType[];

const getRecordList = async (): Promise<GetRecordListResponseType> => {
  const response = await fetch(`${API_HOST}/records`);
  if (!response.ok) throw new Error('fail to fetch record list');

  return response.json();
};

interface Props {
  options?: QueryOptionsType<GetRecordListResponseType, Error>;
}

const useGetRecordList = ({
  options,
}: Props): UseQueryResult<GetRecordListResponseType, Error> => {
  return useQuery({
    queryKey: RecordQueryKey.recordList(),
    queryFn: getRecordList,
    ...options,
  });
};

export default useGetRecordList;
