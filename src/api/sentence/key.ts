const queryKey = 'sentence';

export const SentenceQueryKey = {
  all: () => [queryKey],
  sentenceList: () => [queryKey, 'sentence-list'],
};
