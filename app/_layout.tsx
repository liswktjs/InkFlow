import { Stack } from 'expo-router';
import QueryProvider from '../src/provider/QueryProvider';

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack />
    </QueryProvider>
  );
}
