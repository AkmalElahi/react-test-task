export interface ICard {
  id: number
  title: string
  description: string
  promocode: string
  isActive: boolean
}
export interface IServerResponse {
  bonuses: ICard[]
}

export interface IState {
  bonuses: ICard[]
  isBonusesLoading:boolean
}

export interface ISaveData {
  type: string
  payload: IServerResponse
}

export interface IActivateBonus {
  type: string
  payload: number
}

export interface IFilterBonus {
  type: string
  value: string
  payload: string
}

export interface ISaveBonus {
  type: string
  payload: ICard[]
}

export interface ISaveIsLoading {
  type: string
  payload: boolean
}
