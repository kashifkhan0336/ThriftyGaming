import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { IProduct } from './interfaces/product';

@Controller('products')
export class ProductsController {
    private readonly products: IProduct[] = [
        {
            id: 1,
            title: 'Product 1',
            description: 'My product description',
            image: 'image-1.png',
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'My product description',
            image: 'image-2.png',
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'My product description',
            image: 'image-3.png',
        },
    ];

    @Get()
    async getProducts() {
        return {
            count: 5,
            data: this.products,
        };
    }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDTO) {
        console.log(createProductDto);
        return { message: 'hello' };
    }
}
