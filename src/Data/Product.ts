import { product_props } from "../Types/type";
import tshirst from "../images/tshirt.jpeg"
import shirt from "../images/shirt.jpeg"
import saree from "../images/sari.jpeg"
import jeans from "../images/jeans.jpeg"
import {images} from '../images'

export const Product_list: product_props = [
    {
        id: 1,
        name: "T-shirt",
        brand: "Burberry",
        amount: 2400,
        img: images.tShirt,
        bid_amount: 0
    },
    {
        id: 2,
        name: "Silk Saree",
        brand: "Kanchipuram",
        amount: 15000,
        img: saree,
        bid_amount: 0
    },
    {
        id: 3,
        name: "Shoes",
        brand: "Steve Madden",
        amount: 16999,
        img: require('../images/shoes.jpg'),
        bid_amount: 0
    },
    {

        id: 4,
        name: "Jeans",
        brand: "Alexander McQueen ",
        amount: 2500,
        img: jeans,
        bid_amount: 0

    },
    {
        id: 5,
        name: "Shirt",
        brand: "Allen Solly",
        amount: 1350,
        img: shirt,
        bid_amount: 0
    },
    {
        id: 6,
        name: "Baby cloth",
        brand: "Cucumber",
        amount: 499,
        img: require("../images/baby.jpg"),
        bid_amount: 0
    },
    {
        id: 7,
        name: "Sandals",
        brand: "WoodLand", 
        amount: 2097,
        img: require("../images/sandal.webp"),
        bid_amount: 0
    }
]




