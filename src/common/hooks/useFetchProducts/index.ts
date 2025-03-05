import { useEffect, useState } from "react";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

const useFetchProducts = (productService: IProductService) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const productsData = await productService.fetchProducts();

        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        setError("Erro ao carregar produtos");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [productService]);

  return { products, isLoading, error };
};

export default useFetchProducts;

// const useFetchProducts = <T>(url: string): FetchResult<T> => {
//   const [data, setData] = useState<T | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const http: IHttp = Http();

//   useEffect(() => {
//     setIsLoading(true);

//     http
//       .get<T>(url)
//       .then((response) => {
//         setData(response);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError("Erro ao carregar dados!");
//         setIsLoading(false);
//       });
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;
