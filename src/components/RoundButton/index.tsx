import { forwardRef, PropsWithChildren, Ref } from 'react';
import { PressableProps, View } from 'react-native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';
import * as S from './index.styles';

interface Props extends Omit<PressableProps, 'onPress'> {
  onPress?: TouchableOpacityProps['onPress'];
}

const RoundButton = forwardRef(
  (
    { children, onPress, ...rest }: PropsWithChildren<Props>,
    ref: Ref<View>,
  ) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <S.PressableContainer ref={ref} {...rest}>
          <S.ButtonText>{children}</S.ButtonText>
        </S.PressableContainer>
      </TouchableOpacity>
    );
  },
);

export default RoundButton;
