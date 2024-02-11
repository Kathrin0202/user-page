import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: #512689;
`;
export const HeaderBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  padding-top: 32px;
  @media screen and (max-width: 768px) {
    padding-right: 20px;
  }
`;
export const HeaderBtn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid #f8f8f8;
  background-color: #512689;
  color: #f8f8f8;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
`;
export const HeaderTextTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;
export const HeaderText = styled.p`
  width: 846px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    width: 334px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const UserContainer = styled.div`
  padding: 48px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
`;

export const UserLogin = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #151317;
`;

export const UserImages = styled.div`
  width: 124px;
  height: 124px;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 100px;
`;

export const UserCard = styled.div`
  width: 305px;
  height: 263px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 36px;
  padding-bottom: 20px;
  align-items: center;
  border-radius: 10px;
  gap: 16px;
  box-shadow: 0px 0.9960451126098633px 3.984180450439453px 0px #33333326;
  &:hover {
    border: 1px solid #000000;
  }
`;

export const UserText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  color: #009ee4;
  text-align: center;
`;

export const LikeBox = styled.div`
  width: 265px;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderBtnMob = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
