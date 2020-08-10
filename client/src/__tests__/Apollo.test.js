import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import clientMock from '../apollo/config';
import Layout from '../hoc/Layout/Layout';
import ProductSearch from "../containers/ProductSearch/ProductSearch";
import Product from "../components/Product/Product";
import {useQuery} from "@apollo/react-hooks";
import {GET_SEARCH_PRODUCT} from "../apollo/queries/searchProduct";

configure({adapter: new Adapter()})

describe('Star', () => {
    it('calls the mutate method on Apollo Client', () => {
        const wrapper = mount(
            <ApolloProvider client={clientMock}>
                <Layout>
                    <ProductSearch />
                </Layout>
            </ApolloProvider>,
        );

        const input = wrapper.find('input');

        input.simulate('focus');
        input.simulate('change', { target: { value: 'abba' } });

        const form = wrapper.find('form');
        form.simulate('submit');

        const product = <Product
            key={'testing_1'}
            productImageURL={'https://testing.cl'}
            productBrand={'testing'}
            productDescription={'testing'}
            productDiscount={50}
            productReferencePrice={1000}
            productPrice={500}/>

        expect(wrapper.find(product));
    });
});