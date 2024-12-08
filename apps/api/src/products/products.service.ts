import { InjectRepository } from '@mikro-orm/nestjs';
import { ICreateProduct } from './interfaces/product';
import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { EntityRepository } from '@mikro-orm/sqlite';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: EntityRepository<Product>,
    ) {}

    async get() {
        const products = await this.productRepo.findAll();
        return products;
    }

    /*
     * Here, interface is used instead of DTO even tho they are same.
     * Because,
     * DTOs are used to "enforce" the incoming payload in request to
     * match our desired format, because it is coming from external source
     * However,
     * In services it is coming from Controller which has already transformed
     * the payload, so the DTO is un-necessary. Also, the interfaces are removed
     * during runtime (may impact memory xd)
     * */

    async create(productData: ICreateProduct) {
        // 1. Validate product data
        if (!productData) {
            throw new Error('Data not provided');
        }

        // 2. Add in database
        const newProduct = await this.productRepo.insert(productData);
        return newProduct;
    }

    async update() {}
    async remove() {}
}
