import activateBonus from "../helpers/activateBonuse";
import filterBonuses from "../helpers/filterBonuses";
import mockData from "../helpers/mockData";
import {
  IServerResponse,
  IState,
  ICard,
  ISaveData,
  ISaveBonus,
  ISaveIsLoading,
  IFilterBonus,
  IActivateBonus,
} from "../Interface";
import { BONUSES_LOADING, CHANGE_BONUS, POST_ACTIVATE_BONUS, POST_FILTER_BONUS, SAVE_DATA } from "./actionTypes";

const initialState: IState = {
  bonuses: [],
  isBonusesLoading: true,
};

const dataReducer = (
  state = initialState,
  action: ISaveData | ISaveBonus | ISaveIsLoading | IFilterBonus | IActivateBonus
): IState => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_BONUS: {
      return {
        ...state,
        bonuses: payload as ICard[],
        isBonusesLoading: false,
      };
    }
    case POST_FILTER_BONUS: {
      return {
        ...state,
        bonuses: filterBonuses(mockData.bonuses, action.payload as string),
        isBonusesLoading: false,
      };
    }
    case POST_ACTIVATE_BONUS: {
      return {
        ...state,
        bonuses: activateBonus(state.bonuses, action.payload as number),
        isBonusesLoading: false,
      };
    }
    case SAVE_DATA: {
      return {
        ...state,
        ...(payload as IServerResponse),
        isBonusesLoading: false,
      };
    }
    case BONUSES_LOADING: {
      return {
        ...state,
        isBonusesLoading: payload as boolean,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
