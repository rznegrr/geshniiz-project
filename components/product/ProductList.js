import ProductItem from './ProductItem'

const Productlist = ({ products }) => {
    return (
        <>
            <div className="col-span-12 grid grid-cols-12 ">
                {products.map((pItem) => (
                    <ProductItem items={pItem} key={pItem.id} />
                ))}
            </div>
        </>
    );
}

export default Productlist;