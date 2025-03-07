import {beforeEach, expect, test} from "vitest";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2.ts";

export type AddressType = {
    number: number
    street: {
        title: string
    }
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    address: AddressType
    budget: number
    staffCount: number
}

export type CityType = {
    title: string,
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    },
                },
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    },
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    },
                },
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: {street: {title: 'Central Str'}, number: 12},
                budget: 28800,
                staffCount: 288
            },
            {
                type: "FIRE-STATION",
                address: {street: {title: 'South Str'}, number: 12},
                budget: 58800,
                staffCount: 1800
            },
        ],
        citizensNumber: 1888000
    };
});

test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test("buildings with correct staff count", () => {
    const buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})
