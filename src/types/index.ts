// export type SizesType = "S" | "M" | "L" | "X" | "XL" | "XXL"

export type ProductType = {
    availableSizes: string[]
    description: string
    id: number;
    isFreeShipping: boolean
    price: number
    quantity: number
    sku: number
    title: string
}

export type FilterOptionType = {
    value: string;
    label: string
}

export type SortOptionType = { value: "highest"; label: "highest" } |
{ value: "lowest"; label: "lowest" }
