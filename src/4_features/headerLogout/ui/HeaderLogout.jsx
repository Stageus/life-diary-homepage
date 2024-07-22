import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

export const HeaderLogout = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.MenuContainer>
        <S.BtnContainer>
          <DefaultBtn text="로그아웃" onClick={() => navigate("/login")} />
        </S.BtnContainer>
      </S.MenuContainer>
    </>
  );
};