import { Pressable, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import theme from '@/src/style/theme';
import * as S from './index.styles';

const BackArrowHeader = ({ navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <S.Container>
        <Pressable onPress={() => navigation.goBack()}>
          {({ pressed }) => (
            <S.IconWrapperButton pressed={pressed}>
              <Icon
                name="arrow-back-outline"
                size={25}
                color={theme.colors.primary_500}
              />
            </S.IconWrapperButton>
          )}
        </Pressable>
      </S.Container>
    </SafeAreaView>
  );
};

export default BackArrowHeader;
