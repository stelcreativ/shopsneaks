export class Product {

    constructor({ model_name, price, colour, sizes, sale, code, retailer }) {
        this.model_name = model_name;
        this.price = price;
        this.sizes = sizes;
        this.colour = colour;
        this.sale = sale;
        this.code = code;
        this.retailer = retailer;
    }
}


export class ApiSpec {
    constructor({
        model_name = "Text",
        price = "Price",
        sizes = "Sizes",
        colour = "Colour",
        sale = "Sale",
        code = "Code",
        retailer = "Retailer"
    }) {
        this.model_name_property = model_name;
        this.price_property = price;
        this.sizes_property = sizes;
        this.colour_property = colour;
        this.sale_property = sale;
        this.code_property = code;
        this.retailer_property = retailer;
    }

    /**
     * Given a JSON, returns a Product, according to the spec.
     */
    get_product(json_data, number) {
        return new Product({
            "model_name": json_data[this.model_name_property][number],
            "price": json_data[this.price_property][number],
            "sizes": json_data[this.sizes_property][number].trim().split(' '), // split to list
            "colour": json_data[this.colour_property][number],
            "sale": json_data[this.sale_property][number],
            "code": String(json_data[this.code_property][number]).trim(), // remove trailing spaces
            "retailer": json_data[this.retailer_property][number],
        })
    }
    get_all_products(json_data) {
        const example_property = Object.values(json_data)[0]
        const product_numbers = Object.keys(example_property)

        let products = []
        for (let i in product_numbers) {
            let product = this.get_product(json_data, i)
            products.push(product)
        }
        return products
    }
}

export function getProducts(api_contents) {
    const api_specs = {
        "Nike": new ApiSpec({}),
        "Sneakerstyle.json": new ApiSpec({ "model_name": "Text1", "colour": "Text2" }),
        "Lifestyle": new ApiSpec({ "model_name": "Name", "colour": "Text1" })

    }

    // each API returns all contents within a key that's the retailer name
    const retailer = Object.keys(api_contents)[0]
    const data = api_contents[retailer]
    const spec = api_specs[retailer]
    return spec.get_all_products(data)
}