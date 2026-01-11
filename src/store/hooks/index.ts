import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppSelector } from "../index";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppSelector>();
