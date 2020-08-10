import React, {useState} from 'react';
import {Container} from 'react-bootstrap';

import HeaderInfo from "../../components/Header/HeaderInfo/HeaderInfo";
import Header from "../../components/Header/Header";
import {useMutation, useApolloClient} from "@apollo/react-hooks";

import {FIND_BY_SENTENCE} from "../../apollo/mutations/searchProduct";

import {getNewObjectCache} from "../../util/util";

import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";

import './Layout.css';


const Layout = props => {
    const client = useApolloClient();
    const [searchSentence, setSearchSentence] = useState('');
    const [error, setError] = useState();

    const [findBySentence] = useMutation(FIND_BY_SENTENCE, {
        onCompleted(data) {
            const newData = getNewObjectCache(data, searchSentence);
            client.writeData(newData);
        }
    });

    /**
     *
     * @param event
     */
    const handleChangeValueInput =  (event) => {
        const value = event.target.value;
        setSearchSentence(value);
    };

    /**
     *
     * @param e
     * @returns {Promise<void>}
     */
    const handleSubmitForm = async e => {
        e.preventDefault();

        try {
            await findBySentence({ variables: { sentence: searchSentence } });
            setError(null);
        }catch (e) {
            setError(e)
        }
    }

    const children = (!error) ? props.children : <ProductNotFound error={true}></ProductNotFound>

    return (
        <Container fluid={true} className="w-100 p-0 m-0">
            <div className="d-flex">
                <HeaderInfo />
                <Header
                    searchSentence={searchSentence}
                    handleChangeValueInput={handleChangeValueInput}
                    handleSubmitForm={handleSubmitForm}/>
            </div>
            {children}
        </Container>
    );
};

export default Layout;
