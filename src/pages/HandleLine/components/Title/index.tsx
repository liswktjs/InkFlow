import * as S from './index.styles';

const Title = () => {
  return (
    <S.Container>
      <S.CustomTitle numberOfLines={2}>
        추가 혹은 삭제 할 문장의 주제를 골라주세요
      </S.CustomTitle>
    </S.Container>
  );
};

export default Title;
