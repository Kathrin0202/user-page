import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToken, setLoggedOut } from "../store/slices/auth";
import { useAppSelector } from "../store/store";
import * as S from "../styled/userPage.style";
import exit from "../img/ic_round-exit.png";
import back from "../img/eva_arrow.png";

export const UserPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClickLogOut = () => {
    dispatch(setLoggedOut());
    dispatch(deleteToken());
    navigate("/user-page");
  };
  const handleClickMain = () => {
    navigate("/main");
  };
  const user = useAppSelector((state) => state.user.data);

  return (
    <S.Main>
      <S.Header key={user.id}>
        <S.HeaderBtnBox>
          <S.HeaderBtn onClick={handleClickMain}>Назад</S.HeaderBtn>
          <S.HeaderBtnMob src={back} onClick={handleClickMain} />
          <S.HeaderBtn onClick={handleClickLogOut}>Выход</S.HeaderBtn>
          <S.HeaderBtnMob src={exit} onClick={handleClickLogOut} />
        </S.HeaderBtnBox>
        <S.HeaderTextBox>
          <S.UserImages>
            <S.UserImg src={user.avatar} />
          </S.UserImages>
          <S.HeaderBox>
            <S.HeaderTextTitle>
              {user.first_name} {user.last_name}
            </S.HeaderTextTitle>
            <S.HeaderText>Партнер</S.HeaderText>
          </S.HeaderBox>
        </S.HeaderTextBox>
      </S.Header>
      <S.UserContainer>
        <S.UserCard>
          {" "}
          <S.UserText>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </S.UserText>
          <S.UserText>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </S.UserText>
          <S.UserText>
            {" "}
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </S.UserText>
        </S.UserCard>
        <S.UserLogin>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z"
              fill="#512689"
            />
          </svg>
          <S.UserText>{user.email}</S.UserText>
        </S.UserLogin>
      </S.UserContainer>
    </S.Main>
  );
};
