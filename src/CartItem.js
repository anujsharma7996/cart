import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if (qty === 0) {
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price} </div>
                    <div style={{ color: '#777' }}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1638538800~hmac=b0b1b4cbe6d0eb0ab7757a033eeec0d7"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1638539159~hmac=6061e1e44aa1e2115c681ccae13228e4"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;