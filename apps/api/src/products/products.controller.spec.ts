import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

const mockService = {
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};

const mockCreateProductDTO = {
    title: "Rubik's Cube",
    description:
        'A toy for kids, solve this puzzle to enhance you problem solving skills',
    image: 'https://example.com/image.png',
    specs: [
        '3x3 Cube',
        '6 colors (red, blue, green, yellow, white, orange)',
        'Adjustable, so that people can adjust it according to their spinning speeds',
    ],
};

describe('ProductsController', () => {
    let controller: ProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                {
                    provide: ProductsService,
                    useValue: mockService,
                },
            ],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('get', async () => {
        mockService.get.mockReturnValueOnce([]);
        expect(await controller.get()).toEqual([]);
    });

    it('create', async () => {
        const createdProduct = { id: 1, stars: 0, ...mockCreateProductDTO };
        mockService.create.mockReturnValueOnce(createdProduct);
        expect(await controller.create(mockCreateProductDTO)).toEqual(
            createdProduct,
        );
    });
});
