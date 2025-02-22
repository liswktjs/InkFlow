const queryKey = 'sentence';

export const SentenceQueryKey = {
  all: () => [queryKey],
  sentenceList: () => [queryKey, 'sentence-list'],
  librarySentenceList: (libraryId: string) => [
    queryKey,
    'sentence-list',
    libraryId,
  ],
};
