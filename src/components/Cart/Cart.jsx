import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

const Cart = ({cart}) => {
    const isEmpty = !cart.line_items.length ;
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1"> Your Cart is Empty! Add something and enjoy</Typography> //empty cart notifier
    );

    const FilledCart = () => (
       <>
                  <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
      </>
    );

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3"> Shopping Cart </Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart />}

        </Container>
    )
}

export default Cart
