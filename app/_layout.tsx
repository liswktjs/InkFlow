import QueryProvider from '../src/provider/QueryProvider';
import CustomHeader from '@/src/components/CustomHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { colors } from '@/src/style/color';

export default function RootLayout() {
  return (
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
  );
}
