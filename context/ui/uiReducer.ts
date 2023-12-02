import { ThemesType, UIActionEnum } from '@/interfaces';
import { UIState } from '.';

type UIActionType = {
  type: UIActionEnum.SET_THEME;
  payload: ThemesType;
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case UIActionEnum.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
