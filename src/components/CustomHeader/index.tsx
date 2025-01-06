import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Pressable, SafeAreaView } from 'react-native';
import * as S from './index.styles';

const CustomHeader = ({ options, navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <S.Container>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={({ pressed }) => [pressed && { opacity: 0.7 }]}
        >
          <S.TabImage source={require('../../../assets/images/tab.png')} />
        </Pressable>
        <S.Title>Write My Line</S.Title>
      </S.Container>
    </SafeAreaView>
  );
};

export default CustomHeader;
