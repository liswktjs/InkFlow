import { Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '@/src/style/theme';
import * as S from './index.styles';

interface Props {
  isOpen: boolean;
  sentence: string;
  author: string;
  onClosePress: () => void;
  onArrowLeftPress: () => void;
  onArrowRightPress: () => void;
  onDeletePress: () => void;
}

const LineInfoModal = ({
  isOpen,
  sentence,
  author,
  onArrowLeftPress,
  onArrowRightPress,
  onDeletePress,
  onClosePress,
}: Props) => {
  return (
    <Modal transparent={true} visible={isOpen} animationType="fade">
      <S.ModalContainer>
        <S.ModalContent>
          <S.Header>
            <Pressable onPress={onClosePress}>
              {({ pressed }) => (
                <S.CloseButtonWrapper pressed={pressed}>
                  <Icon
                    name="close"
                    size={35}
                    color={theme.colors.primary_500}
                  />
                </S.CloseButtonWrapper>
              )}
            </Pressable>
          </S.Header>
          <S.SentenceInfoWrapper>
            <S.Line numberOfLines={5}>{sentence}</S.Line>
            <S.Author>{author}</S.Author>
          </S.SentenceInfoWrapper>
          <S.ControllerWrapper>
            <Pressable onPress={onArrowLeftPress}>
              {({ pressed }) => (
                <S.ButtonWrapper pressed={pressed}>
                  <Icon name="arrow-undo-outline" size={35} />
                </S.ButtonWrapper>
              )}
            </Pressable>
            <Pressable onPress={onDeletePress}>
              {({ pressed }) => (
                <S.ButtonWrapper pressed={pressed}>
                  <Icon name="trash-outline" size={35} />
                </S.ButtonWrapper>
              )}
            </Pressable>
            <Pressable onPress={onArrowRightPress}>
              {({ pressed }) => (
                <S.ButtonWrapper pressed={pressed}>
                  <Icon name="arrow-redo-outline" size={35} />
                </S.ButtonWrapper>
              )}
            </Pressable>
          </S.ControllerWrapper>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default LineInfoModal;
