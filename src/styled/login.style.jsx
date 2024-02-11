import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Login = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  opacity: 1;
  box-shadow: 0px 4px 20px 0px #00000014;
  border-radius: 16px;
  padding: 16px;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 2;
    top: 55px;
    opacity: 1;
  }
`;

export const ModalBlockText = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ModalForm = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
  &:first-child {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 20px;
  }
`;

export const ModalFormLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalFormLoginText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ModalInputLogin = styled.input`
  width: 468px;
  border-radius: 8px;
  padding: 12px 8px 12px 16px;
  background-color: #f8f8f8;
  border-color: transparent;
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #808185;
  }
  &:invalid {
    border: 1px solid #ff6161;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`;
export const Error = styled.div`
  color: #ff6161;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ModalBtnEnter = styled.button`
  width: 100%;
  height: 48px;
  background-color: #512689;
  border-radius: 8px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
  }
`;

export const ModalBtnEnterLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.79px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ModalFormInput = styled.div`
  display: flex;
  position: relative;
`;
