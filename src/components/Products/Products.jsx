import React from 'react';
import Grid from '@material-ui/core';


const products = [
    {id: 1, name: 'MacBook', description: 'M1 MacBook', price: '500.00'},
    {id: 1, name: 'Cricket-Cap', description: 'LPL Cricket Cap', price: '200.00'}
]

const Products = () =>{
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}