const queryKey = 'record';

export const RecordQueryKey = {
  all: () => [queryKey],
  recordList: () => [queryKey, 'record-list'],
};
