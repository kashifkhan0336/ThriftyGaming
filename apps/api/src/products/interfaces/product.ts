/*
 * Interfaces are especially used in PROVIDERS so that
 * types can be checked and used in services.ts files
 * Interface does not provide any benefit other than type checks
 * in Nestjs System, therefore they are removed at built time
 */
export interface ICreateProduct {
    title: string;
    description: string;
    image: string;
    specs: string[];
}
