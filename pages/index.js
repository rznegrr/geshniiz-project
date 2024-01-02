import Productlist from "../components/product/ProductList";
import Layout from "../components/layouts/layout";
import products from "../data/product.json"
import HeadTitle from "../components/ui/headTitle";

const ProductPage = () => {

    return (
        <div>
            <HeadTitle title='گشنیز'/>
            <Layout>
                {<Productlist products={products} />}
            </Layout>
        </div>
    );
}

export default ProductPage;