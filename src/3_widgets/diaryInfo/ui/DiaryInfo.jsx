// Npm
import { useState } from "react";
// Slice
import { S } from "./style"; 
import { Slider } from "./slider/ui";
// Layer
import { DiaryLikeBtn } from "@features/diaryLikeBtn";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = ( props )=>{
    const { idx, imgContents, textContent, isLiked, likeCnt, commentCnt } = props.diary;
    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const onClickModal = () => setIsOpenModal( !isOpenModal );
    
    return (
        <S.DiaryInfo>

                <S.ContentPart>
                  <S.DiarySliderContainer>
                    <Slider sliderList={ imgContents } />
                  </S.DiarySliderContainer>

                  <S.DiaryContent>
                    { textContent }
                  </S.DiaryContent>
                </S.ContentPart>

                <S.CommentPart $openModal={ isOpenModal }>
                  <S.Cancel onClick={ onClickModal }>
                    <Icon size="30px" type="cancel" color="#FF6767" />
                  </S.Cancel>
                </S.CommentPart>
                
                <S.ButtonPart>
                    <DiaryLikeBtn
                    diaryIdx={ idx }
                    likeCnt={ likeCnt }
                    isLiked={ isLiked }
                    />

                    <S.CommentBtn
                    $isOpen={ isOpenModal }
                    onClick={ onClickModal }
                    >
                      <div>
                        <Icon
                        type="comment"
                        color={ isOpenModal ? "#F1F1F1" : "#FF6767" }
                        />
                      </div>
                      <div>
                        {`${commentCnt}개`}
                      </div>
                    </S.CommentBtn>

                    <DefaultBtn text="공유" />
                    <DefaultBtn text="신고" />
                </S.ButtonPart>

        </S.DiaryInfo>
      );
}