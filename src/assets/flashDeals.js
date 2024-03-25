import beverages from './beverages.png'
import fresh_produce from './fresh-produce.png'
import frozen_foods from './frozen-foods.png'

const flashDeals = [
    {
        id:1,
        image: beverages,
        name: 'sparkling water (12-pack)',
        category: 'beverages',
        old_price: 'GH¢ 25.44',
        new_price: 'GH¢ 55.44',
        deal: '30%',
    },

    {
        id:2,
        image: frozen_foods,
        name: 'Frozen Vegetable pack',
        category: 'frozen foods',
        old_price: 'GH¢ 235.44',
        new_price: 'GH¢ 185.44',
        deal: '30%',
    },

    {
        id:3,
        image: fresh_produce,
        name: 'fresh apples',
        category: 'fresh produce',
        old_price: 'GH¢ 35.44',
        new_price: 'GH¢ 25.44',
        deal: '30%',
    },

]

export default flashDeals;