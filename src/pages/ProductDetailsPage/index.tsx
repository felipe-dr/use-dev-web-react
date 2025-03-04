import { useParams } from "react-router-dom";

import { PRODUCTS_BASE_URL } from "../../common/constants/endpoints";
import useFetch from "../../common/hooks/useFetch";
import { Product } from "../../common/types/product";
import StatusHandler from "../../common/utils/statusHandler";
import BackgroundBanner from "../../components/BackgroundBanner";
import ProductDetail from "../../components/ProductDetail";
import Typography from "../../components/Typography";
import Styles from "./ProductDetailsPage.module.css";

type ProductDetailsPageProps = {
  addToCart: (product: Product) => void;
};

function ProductDetailsPage({ addToCart }: ProductDetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const {
    data: productsData,
    isLoading: isLoadingProduct,
    error: productError,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);
  const product = productsData?.products.find(
    (productItem) => productItem.id.toString() === id
  );

  return (
    <>
      <BackgroundBanner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png" />
      <main className="container">
        <section>
          <div className={Styles.productContainer}>
            <Typography variant="h4">Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoadingProduct} error={productError}>
              {product ? (
                <ProductDetail
                  id={product.id}
                  title={product.label}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageSrc}
                  colors={product.colors}
                  addToCart={addToCart}
                />
              ) : (
                <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
