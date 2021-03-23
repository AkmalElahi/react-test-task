import {
  CHANGE_BONUS,
  POST_ACTIVATE_BONUS,
  POST_FILTER_BONUS,
  SAVE_DATA,
} from "./actionTypes";
import {
  ICard,
  ISaveBonus,
  ISaveData,
  IServerResponse,
  IFilterBonus,
  IActivateBonus,
} from "../Interface";

export const actionSaveData = (data: IServerResponse): ISaveData => ({
  type: SAVE_DATA,
  payload: data,
});

export const actionFilter = (value: string): IFilterBonus => ({
  type: POST_FILTER_BONUS,
  payload: value,
  value,
});

export const actionSaveBonus = (data: ICard[]): ISaveBonus => ({
  type: CHANGE_BONUS,
  payload: data,
});

export const actionActivateBonus = (payload: number): IActivateBonus => ({
  type: POST_ACTIVATE_BONUS,
  payload,
});
