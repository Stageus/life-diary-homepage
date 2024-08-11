// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";

export const useGetAuth = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const [ userInfo, setUserInfo ] = useState( null );
  const { cookieGet } = useCookie();
  const { errorRoute } = useRoute();

  const mapper = (resData) => {
    const permissionType = {
      user: 0,
      admin: 1,
    };

    return {
      permission: permissionType[resData.permission],
    };
  };

  const getAuth = () => {
    baseFetch("auth", {}, cookieGet());
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    switch ( fetchData.status ) {
      case 200:
        setUserInfo( mapper(fetchData.data) );
        break;
      case 401:
        setUserInfo( null );
        break;
      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [ userInfo ];
};
