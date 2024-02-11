import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./slices/auth";
import userReducer from "./slices/userSlices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export const useAppSelector = useSelector;
