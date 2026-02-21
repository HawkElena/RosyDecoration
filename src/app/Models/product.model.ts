export interface Product {
  idproduct?: number; // opcional, por si luego quieres identificar cada foto
  name: string; // nombre del producto
  url: string; // URL de la imagen
  category?: string; // opcional, por si luego quieres agrupar
  soldOut?: boolean; // opcional, para marcar si la foto está agotada
  instock?: number; // opcional, para llevar un control de stock
  price: number; // precio del producto
  description: string; // descripción del producto opcional
}
