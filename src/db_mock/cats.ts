import { Pet } from "../util/types/types";

const cats: Pet[] = [
    {
        id: 1,
        name: "Sherlock",
        lastname: "Holmes",
        sex: "m",
        breed: "American Shorthair",
        color: ["White", "Orange"],
        weight: 8.2
    },
    {
        id: 2,
        name: "Irene",
        lastname: "Adler",
        sex: "f",
        breed: "Bombay",
        color: ["Black"],
        weight: 4.7
    },
    {
        id: 3,
        name: "Mr. Mittens",
        lastname: "Turbofreckles",
        sex: "m",
        breed: "Maine Coon",
        color: ["Gray"],
        weight: 7.1,
        profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg'
    }
];

export default cats;