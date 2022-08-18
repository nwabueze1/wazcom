import React from 'react';
import { Item } from './components/Item/Item';
import { useCartStyles } from './styles';

export const useDisplayCartItems = () => {
    return () => {
        const classes = useCartStyles();
        const handleClick = () => {
            console.log("okay");
        };
        const props = {
            id: 1414,
            name: "Ham hock, sausage and cider raised pie",
            description: "150ml dry cider, 200ml fresh chicken stock, 1 .....",
            price: 21331,
            image_url: "https://images.unsplash.com/photo-1659653404358-5ad37211a0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            status: false,
            condition: true,
            currency: "$",
            quantity: 20
        }

        return (
            <>
                <div className={classes.cartHeader}>
                    My order
                </div>
                <Item onClick={handleClick} {...props} />
            </>
        );
    }
};

