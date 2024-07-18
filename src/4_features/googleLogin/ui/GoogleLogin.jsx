import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";

export const GoogleLoginBtn = () => {
  const [redirectUrlData, status, baseFetch] = useGetRedirectUrl();
  console.log(redirectUrlData);
  const handleLogin = () => {
    window.location.href = redirectUrlData.redirectUrl;
  };

  return (
    <>
      <S.GoogleLoginBtn onClick={handleLogin}>
        <S.GoogleLogo />
      </S.GoogleLoginBtn>
    </>
  );
};
