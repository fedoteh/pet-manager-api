import { Pet } from "../util/types/types";

const dogs: Pet[] = [
    {
        id: 1,
        name: "Leia",
        lastname: "Organa",
        sex: "female",
        breed: "Golden Retriever",
        color: ["Golden"],
        weight: 42,
        profilePicture: './img/leia.avif'
    },
    {
        id: 2,
        name: "Totoño",
        lastname: "Leopoldo",
        sex: "male",
        breed: null,
        color: ["Light Yellow"],
        weight: 10,
        profilePicture: "./img/toti.avif"
    },
    {
        id: 3,
        name: "Guauguaucito",
        lastname: "Feroz",
        sex: "female",
        breed: "Jack Russel",
        color: ["White", "Brown"],
        weight: 15,
        profilePicture: "https://images.dog.ceo/breeds/terrier-jackrussell/n02093754_100.jpg"
    }
];

export default dogs;