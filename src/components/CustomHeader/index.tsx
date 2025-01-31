import { Pressable, SafeAreaView } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '@/src/style/theme';
import * as S from './index.styles';

const CustomHeader = ({ navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <S.Container>
        <Pressable onPress={() => navigation.openDrawer()}>
          {({ pressed }) => (
            <S.TabLabel pressed={pressed}>
              <Icon
                name="menu-outline"
                size={30}
                color={theme.colors.primary}
              />
            </S.TabLabel>
          )}
        </Pressable>
      </S.Container>
    </SafeAreaView>
  );
};

export default CustomHeader;
