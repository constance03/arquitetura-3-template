import { BadRequestError } from "../errors/BadRequestError"
import { Product } from "../models/Product"

export interface ProductInputDTO {
    id: string,
    name: string,
    price: number
}

export interface ProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export interface EditProductInputDTO {
    idToEdit: string,
    newName: string | undefined,
    newId: string | undefined,
    newPrice: number | undefined,
    newCreatedAt: string | undefined
}

export interface EditProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export class ProductDTO {
    //atributos

    //metodos
    //metodo de input
    public createProductInputDTO(id: unknown, name: unknown, price: unknown) : ProductInputDTO {

        //validacao que nao aceita dados e dera um erro especifico
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof price !== "number") {
            throw new BadRequestError("'price' deve ser number")
        }

        const dto: ProductInputDTO = {
            id, 
            name, 
            price
        }

        return dto
    }

    //metodo de output
    public createProductOutputDTO(product: Product): ProductOutputDTO {
        //verificacao de tipagem
        //organizar os dados de forma correta
        const dto: ProductOutputDTO = {
            message: "Produto registrado com sucesso",
            product: {
                id: product.getId(),
                name: product.getName(),
                price: product.getPrice(),
                createdAt: product.getCreatedAt()
            }
        }

        return dto
    }

    public editProductInputDTO(idToEdit: string, newId: unknown, newName: unknown, newPrice: unknown, newCreatedAt: unknown) : EditProductInputDTO {
        
        if (newId !== undefined) {
            if (typeof newId !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
        }
        
        if (newName !== undefined) {
            if (typeof newName !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }
        }
        
        if (newPrice !== undefined) {
            if (typeof newPrice !== "number") {
                throw new BadRequestError("'price' deve ser number")
            }
        }

        if (newCreatedAt !== undefined) {
            if (typeof newCreatedAt !== "string") {
                throw new BadRequestError("'createdAt' deve ser string")
            }
        }

        const dto: EditProductInputDTO = {
            idToEdit, 
            newId, 
            newName, 
            newPrice,
            newCreatedAt
        }

        return dto
    }

    public editProductOutputDTO(product: Product): EditProductOutputDTO {
        //verificacao de tipagem
        //organizar os dados de forma correta
        const dto: EditProductOutputDTO = {
            message: "Produto registrado com sucesso",
            product: {
                id: product.getId(),
                name: product.getName(),
                price: product.getPrice(),
                createdAt: product.getCreatedAt()
            }
        }

        return dto
    }
}