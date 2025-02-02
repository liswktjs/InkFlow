import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@emotion/react';

import QueryProvider from '../src/provider/QueryProvider';
import CustomHeader from '../src/components/CustomHeader';
import BackArrowHeader from '@/src/components/BackArrowHeader';
import theme, { colors } from '../src/style/theme';

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView>
        <QueryProvider>
          <Drawer
            screenOptions={{
              drawerStyle: {
                backgroundColor: colors.white,
              },
              drawerLabelStyle: {
                fontSize: 18,
                color: colors.text,
                fontWeight: 800,
              },
              drawerActiveTintColor: colors.primary,
              sceneStyle: {
                backgroundColor: colors.background,
              },
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
                header: CustomHeader,
                title: '주제 고르기',
              }}
            />
            <Drawer.Screen
              name="write/[id]/index"
              options={{
                header: BackArrowHeader,
                drawerItemStyle: { display: 'none' },
              }}
            />
            <Drawer.Screen
              name="write/[id]/done"
              options={{
                header: BackArrowHeader,
                drawerItemStyle: { display: 'none' },
              }}
            />
            <Drawer.Screen
              name="handle-line"
              options={{
                header: CustomHeader,
                title: '문장 다루기',
              }}
            />
            <Drawer.Screen
              name="subject/[id]/index"
              options={{
                header: BackArrowHeader,
                drawerItemStyle: { display: 'none' },
              }}
            />
            <Drawer.Screen
              name="subject/[id]/add"
              options={{
                header: BackArrowHeader,
                drawerItemStyle: {
                  display: 'none',
                },
              }}
            />
          </Drawer>
        </QueryProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
