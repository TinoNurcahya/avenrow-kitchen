import { homeImages } from './homeImages.js'

// Only approved featured records are needed in this phase.
// Complete the remaining canonical menu before building the Menu page.
export const menuCategories = ['starters', 'mains', 'sides', 'desserts', 'drinks']

export const menuItems = [
  {
    id: 'braised-short-rib',
    name: 'Braised Short Rib',
    category: 'mains',
    price: 36,
    description: 'Red wine jus, potato purée, roasted shallots',
    featured: true,
    image: homeImages.F1,
  },
  {
    id: 'seared-atlantic-salmon',
    name: 'Seared Atlantic Salmon',
    category: 'mains',
    price: 31,
    description: 'Charred greens, lemon beurre blanc, crispy potatoes',
    featured: true,
    image: homeImages.F2,
  },
  {
    id: 'wild-mushroom-rigatoni',
    name: 'Wild Mushroom Rigatoni',
    category: 'mains',
    price: 26,
    description: 'Parmesan, thyme, roasted mushrooms, brown butter',
    featured: true,
    image: homeImages.F3,
  },
]

export const featuredDishes = menuItems.filter((dish) => dish.featured)
