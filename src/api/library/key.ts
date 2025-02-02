const queryKey = 'library';

export const LibraryQueryKey = {
  all: () => [queryKey],
  libraryList: () => [queryKey, 'library-list'],
};
