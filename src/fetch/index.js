import moment from 'moment'
const products = [
    {
        id: '1',
        title: 'Chocolate',
        description: 'food',
        created: moment().format('DD-MMM-YYYY'),
        price: 10
    },
    {
        id: '3',
        title: 'Milk',
        description: 'food',
        created: moment().format('DD-MMM-YYYY'),
        price: 20
    },

]

export const fetchProducts = () => products