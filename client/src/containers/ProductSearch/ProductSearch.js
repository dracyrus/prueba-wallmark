import React, {useEffect, useState} from 'react';
import {useApolloClient, useMutation, useQuery} from "@apollo/react-hooks";

import {GET_SEARCH_PRODUCT} from "../../apollo/queries/searchProduct";
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";
import Dropdown from "../../components/Dropdown/Dropdown";

import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";
import {FIND_BY_SENTENCE} from "../../apollo/mutations/searchProduct";
import {getNewObjectCache} from "../../util/util";

import './ProductSearch.css';

const ProductSearch = props => {
    const client = useApolloClient();
    const { data } = useQuery(GET_SEARCH_PRODUCT);
    const [sentence, setSentence] = useState('');
    const [actualPage, setActualPage] = useState(1);
    const [findBySentence] = useMutation(FIND_BY_SENTENCE, {
        onCompleted(data) {
            const newData = getNewObjectCache(data, sentence);

            client.writeData(newData);
        }
    });

    useEffect(() => {
        if(data) setSentence(data.sentence);
    }, [data]);

    /**
     *
     * @param page
     */
    const handleUpdatePagination = async (page) => {
        setActualPage(page);
        try {
            await findBySentence({ variables: { sentence: data.sentence, page: page } });

        }catch (e) {
            console.log(e);
        }
    }

    let products = (data) ? data.products : [];

    if(!data) return null;

    if(data && products.length === 0) return (<ProductNotFound sentence={sentence}/>);

    return (
        <div className='app-container'>
            <div className="rct-app-content">
                <div className="rct-page">
                    <div className="content-wrapper">
                        <div className="rct-page-content">
                            <div className="shop-wrapper">
                                <div className="d-flex">
                                    <div className="col-lg-5 col-md-4 d-none d-md-block col-padding-12">
                                        <p className="mb-10">
                                            Resultados para <b className="text-capitalize"> {sentence}</b>:
                                        </p>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-sm-12">
                                        <Dropdown />
                                    </div>
                                </div>
                                <div className="d-flex mb-60">
                                    <div className='col-lg-3 col-md-4 d-none d-md-block col-padding-12'>
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-sm-12 col-padding-12">
                                        <div className="shop-content">
                                            <div className="ais-Hits">
                                                <div className="ais-Hits-list">
                                                    {products.map((element) => {
                                                        return (
                                                            <Product
                                                                key={element._id}
                                                                productImageURL={'https://' + element.image}
                                                                productBrand={element.brand}
                                                                productDescription={element.description}
                                                                productDiscount={data.disccountAmount}
                                                                productReferencePrice={element.price}
                                                                productPrice={element.price}/>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <Pagination
                                                actualPage={actualPage}
                                                numberProducts={data.numberProducts}
                                                updatePagination={handleUpdatePagination}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSearch;

