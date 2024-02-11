import { useNavigate } from "react-router-dom";
import * as S from "../styled/main.style";
import { useDispatch } from "react-redux";
import { getUserCard } from "../api";
import { setUserDetails } from "../store/slices/userSlices";

export const UserContainer = ({ users }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleUserLink = (userId) => {
    navigate(`users/${userId}`);
    getUserCard(userId)
      .then((data) => {
        dispatch(setUserDetails(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {users?.length > 0 ? (
        <S.UserContainer>
          {users.map((user, index) => (
            <S.UserCard key={index}>
              <S.UserImages onClick={() => handleUserLink(user.id)}>
                <S.UserImg src={user.avatar} />
              </S.UserImages>
              <S.UserLogin>
                {user.first_name} {user.last_name}
              </S.UserLogin>
              <S.LikeBox>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
                      stroke="#151317"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
              </S.LikeBox>
            </S.UserCard>
          ))}
        </S.UserContainer>
      ) : (
        <S.UserText>Пользователи не найдены</S.UserText>
      )}
    </>
  );
};
