import { Pet } from "../util/types/types";

const dogs: Pet[] = [
    {
        id: 1,
        name: "Leia",
        lastname: "Organa",
        sex: "f",
        breed: "Golden Retriever",
        color: ["Golden"],
        weight: 42
    },
    {
        id: 2,
        name: "Totoño",
        lastname: "Leopoldo",
        sex: "m",
        breed: null,
        color: ["Light Yellow"],
        weight: 10
    },
    {
        id: 3,
        name: "Guauguaucito",
        lastname: "Feroz",
        sex: "f",
        breed: "Jack Russel",
        color: ["White", "Brown"],
        weight: 15
    }
];

export default dogs;