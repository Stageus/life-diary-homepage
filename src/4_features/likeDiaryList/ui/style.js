import styled from "styled-components";

const DiaryCardContainer = styled.div`
  max-width: 1080px;
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
`;

const DiaryCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PublicSignContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 200px;
  height: 50px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 0 0 10px 10px;
`;

export const S = {
  DiaryCardContainer,
  DiaryCard,
  ThumbnailContainer,
  PublicSignContainer,
  DateContainer,
};