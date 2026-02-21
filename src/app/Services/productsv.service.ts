import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      idproduct: 1,
      name: 'Bouquet Black Rose Pink and Red Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/bouqueblackrosepinkandredbear.jpeg',
      category: 'san-valentin',
      soldOut: false,
      instock: 1, // puedes ajustar el stock según tus necesidades
      price: 1.00,
      description: "Bouquet con rosas negras, rosas rosadas y un oso de peluche."
    },
    {
      idproduct: 2,
      name: 'Bouquet Black Rose Red Balloon',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/bouqueblackroseredballonred.jpeg',
      category: 'san-valentin',
      soldOut: false,
      instock: 1, // puedes ajustar el stock según tus necesidades
      price: 1.00,
      description: "Bouquet con rosas negras y globos rojos."
    },

    {
      idproduct: 3,
      name: 'Bouquet Black Christian Dior with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/bouqueblakchristiandiorandbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet con rosas negras y un oso de peluche."
    },
    {
      idproduct: 4,
      name: 'Bouquet Heart with Stitch',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/bouqueheartandstich.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet con corazón y puntadas."
    },
    {
      idproduct: 5,
      name: 'Large Bouquet Black',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueblack.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas negras."
    },
    {
      idproduct: 6,
      name: 'Large Bouquet Black 1',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueblack1.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas negras."
    },
    {
      idproduct: 7,
      name: 'Large Bouquet Black Heart',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueblackheart.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas negras y corazón."
    },
    {
      idproduct: 8,
      name: 'Large Bouquet Red with Balloon',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueredwithballoon.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas rojas y globos."
    },
    {
      idproduct: 9,
      name: 'Large Bouquet Red with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueredwithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas rojas y un oso de peluche."
    },
    {
      idproduct: 10,
      name: 'Large Bouquet Red with Bear 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouqueredwithbear2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas rojas y un oso de peluche."
    },
    {
      idproduct: 11,
      name: 'Large Bouquet Rosita Fresita with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/largebouquerositafresitawithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet grande con rosas rosadas y un oso de peluche."
    },
    {
      idproduct: 12,
      name: 'Little Box with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/litleboxwithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Caja pequeña con un oso de peluche."    
    },
    {
      idproduct: 13,
      name: 'Little Handbag Pink',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/litlehandbagpink.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bolsa pequeña rosa."
    },
    {
      idproduct: 14,
      name: 'Little Handbag Pink 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/litlehandbagpink2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bolsa pequeña rosa con detalles de corazón."
    },
    {
      idproduct: 15,
      name: 'Little Handbag Pink 3',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/litlehandbagpink3.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bolsa pequeña rosa con detalles de corazón."
    },
    {
      idproduct: 16,
      name: 'Little Box Bear and Balloons',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/littleboxbearandballoons.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Caja pequeña con un oso de peluche y globos."
    },
    {
      idproduct: 17,
      name: 'Little Box Bear and Chocolate',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/littleboxbearandchoclet.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Caja pequeña con un oso de peluche y chocolate."
    },
    {
      idproduct: 18,
      name: 'Little Dolls 1',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/littledolls1.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Muñecas pequeñas."
    },
    {
      idproduct: 19,
      name: 'Little Dolls 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/littledolls2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Muñecas pequeñas con detalles."
    },
    {
      idproduct: 20,
      name: 'Little Round Boxes',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/littleroundboxes.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Cajas redondas pequeñas."
    },
    {
      idproduct: 21,
      name: 'Medium Bouquet Black Rose Red',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueblackrosered.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con rosas negras y rojas."
    },
    {
      idproduct: 22,
      name: 'Medium Bouquet Heart and Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueheartandbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con corazón y oso de peluche."
    },
    {
      idproduct: 23,
      name: 'Medium Bouquet Heart and Bear 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueheartandbear2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con corazón y oso de peluche."
    },
    {
      idproduct: 24,
      name: 'Medium Bouquet Heart and Bear 3',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueheartandbear3.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con corazón y oso de peluche."
    },
    {
      idproduct: 25,
      name: 'Medium Bouquet Heart and Bear 4',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueheartandbear4.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con corazón y oso de peluche."
    },
    {
      idproduct: 26,
      name: 'Medium Bouquet Heart Pink',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouqueheartpink.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con corazón rosa."
    },
    {
      idproduct: 27,
      name: 'Medium Bouquet Pink with Bear and Balloon',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/mediumbouquepinkwithbearandballoon.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet mediano con rosa rosa, oso de peluche y globos."
    },
    {
      idproduct: 28,
      name: 'Small Bouquet Black',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/smallbouqueblack.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet pequeño con rosas negras."
    },
    {
      idproduct: 29,
      name: 'Small Bouquet Red',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/smallbouquered.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet pequeño con rosas rojas."
    },
    {
      idproduct: 30,
      name: 'XL Bouquet Christian Dior Black and Rose Pink',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorblackandrosepink.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas negras y rosas rosa."
    },
    {
      idproduct: 31,
      name: 'XL Bouquet Christian Dior Black with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorblackwithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas negras y oso de peluche."
    },
    {
      idproduct: 32,
      name: 'XL Bouquet Christian Dior Black with Bear 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorblackwithbear2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas negras y oso de peluche."
    },
    {
      idproduct: 33,
      name: 'XL Bouquet Christian Dior Black with Bear 3',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorblackwithbear3.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas negras y oso de peluche."
    },
    {
      idproduct: 34,
      name: 'XL Bouquet Christian Dior Black with Bear 4',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorblackwithbear4.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas negras y oso de peluche."
    },
    {
      idproduct: 35,
      name: 'XL Bouquet Christian Dior Pink with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorpinkwithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rosa y oso de peluche."
    },
    {
      idproduct: 36,
      name: 'XL Bouquet Christian Dior Red',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorred.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rojas."
    },
    {
      idproduct: 37,
      name: 'XL Bouquet Christian Dior Red with Blue Rose and Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquechristiandiorredwithblueroseandbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rojas, rosa azul y oso de peluche."
    },
    {
      idproduct: 38,
      name: 'XL Bouquet Pink Rose Pink and Chocolate',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquepinkrosepinkandchoclet.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rosa, chocolate y globos."
    },
    {
      idproduct: 39,
      name: 'XL Bouquet Pink Rose Pink and Chocolate 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquepinkrosepinkandchoclet2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rosa, chocolate y globos."
    },
    {
      idproduct: 40,
      name: 'XL Bouquet Red with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouqueredwithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rojas y oso de peluche."
    },
    {
      idproduct: 41,
      name: 'XL Bouquet Red with Bear 2',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouqueredwithbear2.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 1.00,
      description: "Bouquet XL con rosas rojas y oso de peluche."
    },
    {
      idproduct: 42,
      name: 'XL Bouquet Rosita Fresita with Bear',
      url: 'https://storagedecoration.blob.core.windows.net/decorationphotos/xlbouquerositafresitawithbear.jpeg',
      category: 'san-valentin',
      soldOut: true,
      instock: 0,
      price: 35.99,
      description: "Bouquet XL con rosas rositas fresitas y oso de peluche."
    },
    // aquí vas agregando más fotos
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
