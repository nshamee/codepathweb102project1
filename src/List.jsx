import React from 'react';
import Card from './Card';

const menuItems = [
  {
    title: 'Otterbox Symmetry Series Plus',
    image: '/item1.jpg',
    description: 'Best Everyday iPhone Case, it is slim yet durable for the best overall case',
  },
  {
    title: 'Element Case Special Ops MagSafe ',
    image: '/item2.jpg',
    description: 'Toughest iPhone case with raised edges and corner protection',
  },
  {
    title: 'Lupa Legacy Wallet Case',
    image: '/item3.jpg',
    description: 'Best Wallet Iphone Case',
  },
    {
    title: 'Casetify iPhone Case',
    image: '/item4.jpg',
    description: 'Best case for teens',
  },
      {
    title: 'Tech21',
    image: '/item5.jpg',
    description: 'A tried-and-true classic, durable and long lasting. Perfect for those that want a simple yet effective case.',
  },
     {
    title: 'Totallee Case',
    image: '/item6.jpg',
    description: 'Best Super-thin case for hidden protection.',
  },
     {
    title: 'Otterbox Fre',
    image: '/item7.jpg',
    description: 'Best Waterproof Case',
  },
     {
    title: 'Bluebonnet Cases',
    image: '/item8.jpg',
    description: 'Best waterproof case for long days at the beach or pool.',
  },
     {
    title: 'UAG Cases',
    image: '/item9.jpg',
    description: 'A classic tough case for a strong reliable life.',
  },
     {
    title: 'Clckr Case',
    image: '/item10.jpg',
    description: 'Best Kickstand case.',
  },
];

const Menu = () => {
  return (
    <div className="cards-container"> 
      {menuItems.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Menu;