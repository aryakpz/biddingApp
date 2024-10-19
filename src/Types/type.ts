export type UserProps = {
    id: number;
    name: string;
}[]

export type productProps = {
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
export type ProductContextType = {
    products: productProps[];
    updateBidAmount: (productId: number, newBidAmount: number) => void;
}[]


export type Notification = {
    message: string;
    timestamp: number;
}[]