import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.components'

class Shop extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherSectionProps }) => (
                        <CollectionPreview key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;