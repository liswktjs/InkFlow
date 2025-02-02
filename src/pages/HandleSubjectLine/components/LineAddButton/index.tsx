import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '@/src/style/theme';
import * as S from './index.styles';

interface Props {
  onPress: () => void;
}

const LineAddButton = ({ onPress }: Props) => {
  return (
    <S.Container>
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <S.IconWrapper pressed={pressed}>
            <Icon name="add" size={55} color={theme.colors.white} />
          </S.IconWrapper>
        )}
      </Pressable>
    </S.Container>
  );
};

export default LineAddButton;
