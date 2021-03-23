import { ICard } from "../Interface";

const activateBonus = (bonuses: ICard[], id: number) => {
  return bonuses.map((item: ICard) => {
    if (item.id === id) {
      return { ...item, isActive: true };
    }
    return item;
  });
};

export default activateBonus;
