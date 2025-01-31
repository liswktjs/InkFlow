import * as S from './index.styles';

interface Props {
  text: string;
  onTextChange: (value: string) => void;
}

const SentenceInput = ({ text, onTextChange }: Props) => {
  return (
    <S.Container>
      <S.CustomTextInput
        value={text}
        onChangeText={onTextChange}
        multiline
        numberOfLines={2}
        placeholder="문장을 입력해주세요"
      />
    </S.Container>
  );
};

export default SentenceInput;
