import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
        {
            price: 15000,
            title: 'Mobile Phone',
            qty: 2,
            img: '',
            id: 1
        },
        {
            price: 50000,
            title: 'Lpatop',
            qty: 1,
            img: '',
            id: 2
        },
        {
            price: 8000,
            title: 'Smart Watch',
            qty: 3,
            img: '',
            id: 3
        }
    ]
        }
    }

    render() {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        );
    }
}

export default Cart;