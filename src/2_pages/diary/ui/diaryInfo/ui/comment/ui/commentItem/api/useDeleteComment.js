import { useFetch, useCookie } from "@shared/hook";
import { useEffect } from "react";

export const useDeleteComment = () => {
 
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();


    const deleteComment = ( commentIdx ) => {
        baseFetch(`comment/${commentIdx}`,{method: "DELETE"}, handleGetCookie());
    }

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된 경우(없는경우)");
                break;

            case 403:
                console.log("해당 댓글의 주인이 아닌경우");
                break;

            case 404:
                console.log("대상으로 하는 commentIdx가 없는경우");
                break;

            case 500:
                console.log("서버에러");
                break;
        }

    },[fetchData]);

    return [ deleteComment ];
    
}