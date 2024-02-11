import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";
import { UserContainer } from "../components/userContainer";
import { deleteToken, setLoggedOut } from "../store/slices/auth";
import * as S from "../styled/main.style";
import exit from "../img/ic_round-exit.png";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickLogOut = () => {
    dispatch(setLoggedOut());
    dispatch(deleteToken());
    navigate("/");
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <S.Main>
      <S.Header>
        <S.HeaderBtnBox>
          <S.HeaderBtn onClick={handleClickLogOut}>Выход</S.HeaderBtn>
          <S.HeaderBtnMob src={exit} onClick={handleClickLogOut} />
        </S.HeaderBtnBox>
        <S.HeaderTextBox>
          <S.HeaderTextTitle>Наша команда</S.HeaderTextTitle>
          <S.HeaderText>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{" "}
          </S.HeaderText>
        </S.HeaderTextBox>
      </S.Header>
      <UserContainer users={users.data} />
    </S.Main>
  );
};
