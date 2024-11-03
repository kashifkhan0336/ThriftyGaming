import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private services: ProductsService) {}

    @Get()
    async getProducts() {
        return this.services.getAll();
    }

    /*
     * Here, DTO is used to enforce a specific format in which data should be
     * received by the controller.
     * Nestjs uses this DTO object to validate the incoming request payload
     * through its ValidationPipeline and external packages like
     * class-transformer class-validator
     */
    @Post()
    async createProduct(@Body() createProductDto: CreateProductDTO) {
        console.log(createProductDto);
        this.services.create(createProductDto);
        return 'hello';
    }
}
