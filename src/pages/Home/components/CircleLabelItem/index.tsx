import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './index.styles';

interface Props {
  title: string;
  circleText: string;
  subText?: string;
  onPress: () => void;
}

const CircleLabelItem = ({ title, circleText, subText, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <S.Container>
        <S.Circle>
          <S.CircleText>{circleText}</S.CircleText>
        </S.Circle>
        <S.ContentWrapper>
          <S.Title>{title}</S.Title>
          {subText && <S.SubText>{subText}</S.SubText>}
        </S.ContentWrapper>
      </S.Container>
    </TouchableOpacity>
  );
};

export default CircleLabelItem;
