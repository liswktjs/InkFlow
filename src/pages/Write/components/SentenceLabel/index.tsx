import * as S from './index.styles';

interface Props {
  sentence: string;
  author: string;
}

const SentenceLabel = ({ author, sentence }: Props) => {
  return (
    <S.Container>
      <S.SentenceLine>{sentence}</S.SentenceLine>
      <S.Author>{author}</S.Author>
    </S.Container>
  );
};

export default SentenceLabel;
