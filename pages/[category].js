import { useRouter } from 'next/router';
import ProductList from '../components/product/ProductList';
import products from '../data/product.json';
import Layout from '../components/layouts/layout';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = category
  ? products.filter((item) => item.category === category)
  : products;

  return (
    <Layout>
      <ProductList products={filteredProducts}/>
    </Layout>
  );
};

export default CategoryPage;