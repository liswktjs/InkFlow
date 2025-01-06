import QueryProvider from '../src/provider/QueryProvider';
import CustomHeader from '@/src/components/CustomHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import theme, { colors } from '@/src/style/theme';
import { ThemeProvider } from '@emotion/react';

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView>
        <QueryProvider>
          <Drawer
            screenOptions={{
              drawerStyle: {
                backgroundColor: colors.background,
              },
              drawerLabelStyle: {
                fontSize: 16,
              },
              drawerActiveTintColor: colors.background,
              drawerActiveBackgroundColor: colors.accent,
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                header: CustomHeader,
                title: '홈',
              }}
            />
            <Drawer.Screen
              name="select-subject"
              options={{
                title: '주제 고르기',
              }}
            />
          </Drawer>
        </QueryProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
