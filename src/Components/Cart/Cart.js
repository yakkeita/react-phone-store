import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { ProductConsumer } from '../../context';
import CartTotals from './CartTotals';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (
                                    <React.Fragment>
                                        <Title name="Your" title="Cart" />
                                        <CartColumns />
                                        <CartList value={value} />
                                        <CartTotals value={value} />
                                    </React.Fragment>
                                );
                            }
                            else {
                                return <EmptyCart />;           
                            }
                        }
                    }                    
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart
