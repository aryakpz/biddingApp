export type User_props = {
    id: number;
    name: string;
}[]

export type product_props = {
    id: number;
    name: string;
    amount: number;
    brand: string,
    img: string,
    bid_amount: number | null

}[]

export type Userclick_props = {
    handleclick: (id: number,
        name: string) => void

}