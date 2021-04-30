import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'P1',
      description: 'description 1',
      price: 100,
      stock: 100,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'P2',
      description: 'description 2',
      price: 200,
      stock: 100,
      imageUrl: '',
    },
    {
      id: 3,
      name: 'P3',
      description: 'description 3',
      price: 300,
      stock: 100,
      imageUrl: '',
    },
    {
      id: 4,
      name: 'P4',
      description: 'description 4',
      price: 400,
      stock: 100,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'P5',
      description: 'description 5',
      price: 500,
      stock: 100,
      imageUrl: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const productFinded = this.products
      .filter((p: Product) => p.id === id)
      .shift();
    if (!productFinded) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return { success: true, product: productFinded };
  }

  create(payload: CreateProductDTO) {
    const newProduct = { id: this.products.length + 1, ...payload };
    this.products.push(newProduct);
    return { success: true, product: newProduct };
  }

  update(id: number, payload: UpdateProductDTO) {
    this.products = this.products.map((p: Product) => {
      if (p.id === id) {
        return { ...p, ...payload };
      } else return p;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    this.findOne(id);
    this.products = this.products.filter((p: Product) => p.id !== id);
    return { success: true };
  }
}
