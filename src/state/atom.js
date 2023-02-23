import { atom } from "recoil"
import { priceData } from "../assets/data/prices"

export const priceState = atom({
    key: 'priceState',
    default: []
})

export const priceFilterState = atom({
    key: 'priceFilterState',
    default: {
        base:'NGN',
        convert: ''
    }
})