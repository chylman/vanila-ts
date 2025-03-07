import {CityType, GovernmentBuildingType} from "./04_2.test.ts";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<GovernmentBuildingType>, staffCount: number) {
    return governmentBuildings.filter(b => b.staffCount > staffCount);
}
