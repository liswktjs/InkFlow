import Icon from 'react-native-vector-icons/Ionicons';

import theme from '@/src/style/theme';
import * as S from './index.styles';

interface Props {
  onPress: () => void;
}

const EmptyRecordSection = ({ onPress }: Props) => {
  return (
    <S.Container onPress={onPress} activeOpacity={0.8}>
      <S.Content>
        <Icon name="pencil" size={50} color={theme.colors.primary} />
        <S.Title>나의 첫 문장을 시작해봐요</S.Title>
      </S.Content>
    </S.Container>
  );
};

export default EmptyRecordSection;
