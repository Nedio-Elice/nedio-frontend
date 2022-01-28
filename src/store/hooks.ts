import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './root';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import { useAppSelector, useAppDispatch } from '/store/hooks';
// const user = useAppSelector((state: RootState) => state.user);
// const user = useAppSelector((state) => state.user);
// const dispatch = useAppDispatch();
// dispatch(exampleAction());
