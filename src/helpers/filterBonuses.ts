import { ICard } from "../Interface";

const filterBonuses = (bonuses:ICard[], value:string) => {
    console.log('I run');
    return bonuses.filter((item:ICard) => (item.title.toLowerCase().indexOf(value.toLowerCase()) + 1));
}

export default filterBonuses;