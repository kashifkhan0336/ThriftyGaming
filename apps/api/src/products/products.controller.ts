import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CreateProductDto } from '../schemas/product.schema';
import { ProductsService } from './products.service';
import { ZodValidationPipe } from '../pipelines/ZodValidationPipe';
import { createProductSchema } from '../schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private services: ProductsService) {}

    @Get()
    async get() {
        return this.services.get();
    }

    /*
     * Here, DTO is used to enforce a specific format in which data should be
     * received by the controller.
     * Nestjs uses this DTO object to validate the incoming request payload
     * through its ValidationPipeline and external packages like
     * class-transformer class-validator
     * Here, we are using Schema-based validation with Zod.
     */
    @Post()
    @UsePipes(new ZodValidationPipe(createProductSchema))
    async create(@Body() productData: CreateProductDto) {
        const product = this.services.create(productData);
        return product;
    }
}
