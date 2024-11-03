import { ICreateProduct, IProduct } from './interfaces/product';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
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

    async getAll() {
        return this.products;
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
        const productId = this.products.length + 1;
        this.products.push({ ...productData, id: productId });
    }

    async update() {}
    async remove() {}
}
