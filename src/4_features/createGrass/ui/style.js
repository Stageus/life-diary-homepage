import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const NameAndBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContentNameContainer = styled.p`
  white-space: nowrap;
  display: flex;
  width: 80px;
`;

const NameHighlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const ColorPreview = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

export const S = {
  ContentContainer,
  NameAndBtnContainer,
  ContentNameContainer,
  NameHighlight,
  ColorPreview,
};