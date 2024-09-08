import { Pet } from "../util/types/types";

const cats: Pet[] = [
    {
        id: 1,
        name: "Sherlock",
        lastname: "Holmes",
        sex: "male",
        breed: "American Shorthair",
        color: ["White", "Orange"],
        weight: 8.2,
        profilePicture: './img/sherlock.jpg'
    },
    {
        id: 2,
        name: "Irene",
        lastname: "Adler",
        sex: "female",
        breed: "Bombay",
        color: ["Black"],
        weight: 4.7,
        profilePicture: './img/irene.jpg'
    },
    {
        id: 3,
        name: "Mr. Mittens",
        lastname: "Turbofreckles",
        sex: "male",
        breed: "Maine Coon",
        color: ["Gray"],
        weight: 7.1,
        profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg'
    }
];

export default cats;