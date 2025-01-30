import { SafeAreaView } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './index.styles';

const CustomHeader = ({ options, navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <S.Container>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.openDrawer()}
        >
          <S.TabLabel>
            <S.TabImage source={require('../../../assets/images/tab.png')} />
          </S.TabLabel>
        </TouchableOpacity>
      </S.Container>
    </SafeAreaView>
  );
};

export default CustomHeader;
