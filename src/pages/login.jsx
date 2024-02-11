import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import { setLoggedIn, setToken } from "../store/slices/auth";
import * as S from "../styled/login.style";
import eyeOn from "../img/Frame.png";
import eyeOff from "../img/Vector.png";
export const Login = () => {
  const [userNameError, setUserNameError] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [register, setRegister] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [visibilityPassword, setVisibilityPassword] = useState(true);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleRegister = ({ email, password, repeatPassword, userName }) => {
    if (!userName) {
      setUserNameError("Не заполнено имя");
      return;
    } else if (!email) {
      setEmailError("Не заполнена почта");
      return;
    } else if (!password) {
      setPasswordError("Не введён пароль");
      return;
    } else if (!repeatPassword) {
      setPasswordError("Не введён пароль повторно");
      return;
    } else if (password !== repeatPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }
    setRegister(true);
    try {
      registerUser(email, password, repeatPassword, userName).then((res) => {
        dispatch(setLoggedIn());
        dispatch(setToken(res.token));
        localStorage.setItem("token", res.token);
        navigate("/main");
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setRegister(false);
    }
  };

  const handleShowPass = () => {
    setVisibilityPassword(!visibilityPassword);
  };

  useEffect(() => {
    setError(null);
  }, [userName, email, password, repeatPassword]);
  return (
    <S.Login>
      <S.ModalBlock>
        <S.ModalBlockText>Регистрация</S.ModalBlockText>
        <S.ModalForm id="formLogIn" action="#">
          <S.ModalFormLogin>
            <S.ModalFormLoginText>Имя</S.ModalFormLoginText>
            <S.ModalInputLogin
              className={userNameError ? "active" : ""}
              type="text"
              name="name"
              id="formname"
              placeholder="Введите имя"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            {userNameError && <S.Error>{userNameError}</S.Error>}
          </S.ModalFormLogin>
          <S.ModalFormLogin>
            <S.ModalFormLoginText>Электронная почта</S.ModalFormLoginText>
            <S.ModalInputLogin
              className={emailError ? "active" : ""}
              type="email"
              name="email"
              id="formemail"
              placeholder="Введите логин"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {emailError && <S.Error>{emailError}</S.Error>}
          </S.ModalFormLogin>
          <S.ModalFormLogin>
            <S.ModalFormLoginText>Пароль</S.ModalFormLoginText>
            <S.ModalFormInput>
              <S.ModalInputLogin
                className={passwordError ? "active" : ""}
                type={visibilityPassword ? "text" : "password"}
                name="password"
                id="formpassword"
                placeholder="Введите пароль"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {visibilityPassword ? (
                <S.Icon
                  src={eyeOn}
                  onClick={handleShowPass}
                  alt="пароль виден"
                />
              ) : (
                <S.Icon
                  src={eyeOff}
                  onClick={handleShowPass}
                  alt="пароль скрыт"
                />
              )}
            </S.ModalFormInput>
            {passwordError && <S.Error>{passwordError}</S.Error>}
          </S.ModalFormLogin>
          <S.ModalFormLogin>
            <S.ModalFormLoginText>Подтвердите пароль</S.ModalFormLoginText>
            <S.ModalFormInput>
              <S.ModalInputLogin
                className={passwordError ? "active" : ""}
                type={visibilityPassword ? "text" : "password"}
                name="repeatpassword"
                id="formrepatpassword"
                placeholder="Повторите пароль"
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              {visibilityPassword ? (
                <S.Icon
                  src={eyeOn}
                  onClick={handleShowPass}
                  alt="пароль виден"
                />
              ) : (
                <S.Icon
                  src={eyeOff}
                  onClick={handleShowPass}
                  alt="пароль скрыт"
                />
              )}
            </S.ModalFormInput>
            {passwordError && <S.Error>{passwordError}</S.Error>}
          </S.ModalFormLogin>
          <S.ModalBtnEnter
            id="btnEnter"
            onClick={() =>
              handleRegister({ userName, email, password, repeatPassword })
            }
          >
            <S.ModalBtnEnterLink>Зарегистрироваться</S.ModalBtnEnterLink>
          </S.ModalBtnEnter>
        </S.ModalForm>
      </S.ModalBlock>
    </S.Login>
  );
};
