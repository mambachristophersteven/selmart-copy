import beverages from './beverages.png'
import diary_and_eggs from './diary-and-eggs.png'
import fresh_produce from './fresh-produce.png'
import meat_and_seafood from './meat-and-seafood.png'
import frozen_foods from './frozen-foods.png'

const populars = [
    {
        id:1,
        image: beverages,
        name: 'sparkling water (12-pack)',
        category: 'beverages',
        old_price: 'GH¢ 25.44',
        new_price: 'GH¢ 55.44',
    },
    {
        id:2,
        image: frozen_foods,
        name: 'Frozen Vegetable pack',
        category: 'frozen foods',
        old_price: 'GH¢ 235.44',
        new_price: 'GH¢ 185.44',
    },
    {
        id:3,
        image: fresh_produce,
        name: 'fresh apples',
        category: 'fresh produce',
        old_price: 'GH¢ 35.44',
        new_price: 'GH¢ 25.44',
    },
    {
        id:4,
        image: diary_and_eggs,
        name: 'Colby Jack Cheese (8 oz)',
        category: 'dairy and eggs',
        old_price: 'GH¢ 50.34',
        new_price: 'GH¢ 35.40',
    },
    {
        id:5,
        image: fresh_produce,
        name: 'fresh mixed berries',
        category: 'fresh produce',
        old_price: 'GH¢ 95.44',
        new_price: 'GH¢ 75.44',
    },
    {
        id:6,
        image: meat_and_seafood,
        name: 'organic chicken breast',
        category: 'meat and seafood',
        old_price: 'GH¢ 185.44',
        new_price: 'GH¢ 179.20',
    },
]

export default populars;