import {GovernmentBuildingType, HouseType} from "../04/04_2.test.ts";

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingType>): Array<string> {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]): Array<string> => {
    return houses.map(m => m.address.street.title)
}

export function createMessages(houses: HouseType[]): Array<string> {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}
