'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Coffee,
  Sandwich,
  Utensils,
  Pizza,
  IceCream,
  Beer,
  Egg,
  Wine,
  Soup,
  Users,
  Info
} from 'lucide-react';

const menuData = [
  {
    name: 'Tostas',
    icon: <Sandwich size={20} />,
    items: [
      { name: 'Frango', allergens: '🌾🥛', price: '9,5', description: 'Tosta, Pickles Couve Roxa, Cream Cheese, Frango Grelhado, Molho Barbecue Caseiro' },
      { name: 'Cogumelos & Figos', allergens: '🌾🥛', price: '13,5', description: 'Tosta, Cogumelos, Compota de Figos e Burrata' },
      { name: 'Pesto & Grão', allergens: '🌾🥛🥜', price: '5', description: 'Tosta, abacate, pesto e humus de beterraba' },
      { name: 'Salmão', allergens: '🌾🥛🥚🐟', price: '13,5', description: 'Tosta, Cream Cheese, Polpa de Maracujá, Ovos Escalfados e Salmão Fumado' },
      { name: 'Atum', allergens: '🌾🥛', price: '8', description: 'Tosta, Pasta de Atum, Tomate Seco e Queijo' },
      { name: 'Mista', allergens: '🌾', price: '3,75', description: '' },
      { name: 'Torrada', allergens: '🌾', price: '2,2', description: '' },
    ]
  },
  {
    name: 'Hambúrgueres Artesanais',
    icon: <Utensils size={20} />,
    items: [
      { name: 'Vegetariano', allergens: '🌾🥛', price: '8,5', description: 'Pão Hambúrguer, Alface, Tomate, Hambúrguer Grão Bico, Queijo Cheddar e Cebola Confitada' },
      { name: 'Viriatus', allergens: '🌾🥛', price: '11,5', description: 'Pão Hambúrguer, Alface, Tomate, Carne Vitela, Queijo Cheddar e Cebola Confitada' },
      { name: 'Crispy Chicken', allergens: '🌾🥛🥚', price: '10,3', description: 'Pão Hambúrguer, Hambúrguer de Frango, Bacon, Alface, Tomate e Cebola Confitada' },
    ]
  },
  {
    name: 'English Breakfast',
    icon: <Coffee size={20} />,
    items: [
      { name: 'English Breakfast', allergens: '🌾🥛🥚', price: '13,5', description: 'Torrada, Salsicha, Baked Beans, Ovos Estrelados, Presunto, Tomate Cherry Confitado e Cogumelos Salteados' },
    ]
  },
  {
    name: 'Saladas e Massas',
    icon: <Soup size={20} />,
    subcategories: [
      {
        title: 'Saladas',
        items: [
          { name: 'Gambas', allergens: '🌾🧴🐚', price: '11', description: 'Base Folhas, Gambas, Abacate, Croutons, Molho de Maracujá e Manga' },
          { name: 'Crispy Chicken', allergens: '🌾🥛', price: '8,5', description: 'Alface Iceberg, Frango Panado, Croutons, Bacon, Cebola Frita e Parmesão' },
          { name: 'Vegetariana', allergens: '🌾⚗️', price: '8,5', description: 'Base Folhas, Hortelã, Pepino, Tomate Cherry, Molho Mostarda e Mel, Croutons e Almôndegas Grão de Bico' },
          { name: 'Cesar', allergens: '🌾🥛🧴', price: '8,5', description: 'Base de Folhas, Tomate Cherry, Croutons, Frango, Molho Cesar e Parmesão Ralado' },
        ]
      },
      {
        title: 'Massas',
        items: [
          { name: 'Cogumelos', allergens: '🌾🥛', price: '8', description: '' },
          { name: 'Nero', allergens: '🌾🐚', price: '8', description: 'Spaghetti Negra, Alho e Gambas' },
          { name: 'Viriatus', allergens: '🌾🥛🐚', price: '9', description: 'Massa, Molho Tomate, Bacon, Cebola Frita, Parmesão Ralado e Camarão' },
        ]
      }
    ]
  },
  {
    name: 'French Toast',
    icon: <Sandwich size={20} />,
    items: [
      { name: 'Viriatus', allergens: '🌾🥛🥚', price: '8', description: 'Pão Brioche, Cream Cheese, Presunto, Ovo Escalfado, Rúcula e Compota' },
      { name: 'Salmão', allergens: '🌾🥛🐟🌱', price: '13,5', description: 'Pão Brioche, Abacate, Cream Cheese Aromatizado, Salmão Fumado e Molho Teriaki' },
      { name: 'Maçã', allergens: '🌾🥛', price: '7,5', description: 'c/ Gelado de Maçã Assada' },
      { name: 'Tiramisu', allergens: '🌾🥛', price: '6,5', description: 'Tiramisu' },
      { name: 'Frutos Vermelhos', allergens: '🌾🥛🥚', price: '6,5', description: 'French Toast, Frutos Vermelhos, Iogurte e Gelado de Frutos Vermelhos' },
    ]
  },
  {
    name: 'Ovos',
    icon: <Egg size={20} />,
    note: '(Opção em Tosta, Croissant ou Bagel)',
    items: [
      { name: 'Benedict', allergens: '🌾🥛🥚', price: '8', description: 'Pasta de Abacate, Ovos Escalfados, Bacon, Molho Holandês e Cebolinho' },
      { name: 'Mexidos', allergens: '🌾🥚⚗️', price: '6', description: 'Opção: Bacon ou Cogumelos ou Alheira' },
    ]
  },
  {
    name: 'Menus',
    icon: <Users size={20} />,
    subcategories: [
      {
        title: 'Menu Brunch',
        items: [
          { name: 'Viriatus', allergens: '🌾🥛🥚🥜🧴', price: '17', description: 'Ovos Mexidos c/ Bacon ou Cogumelos • Croissant Folhado e Torrada • Mini Bowl de Iogurte • Mini Panquecas • Fruta Laminada • Sumo do Dia ou Latte ou Cerveja • 1 fatia de queijo e fiambre (opcional: pasta de abacate +5)' },
          { name: 'Rossio', allergens: '🌾🥛🥚🥜', price: '16', description: 'Tosta ou Ovos à Escolha • Mini Bowl de Iogurte • Mini Panquecas • Sumo do Dia ou Latte (Excepto Tosta de Cogumelos e Figos e Tosta de Salmão) Custo de +5' },
        ]
      },
      {
        title: 'Menu Kids',
        note: 'Até aos 12 anos (inclui: Sumo do Dia + Bola de Gelado)',
        items: [
          { name: 'Mini Bitoque', allergens: '🥚', price: '10', description: 'Bife de Frango, Ovo Estrelado e Chips de Batata' },
          { name: 'Chicken Kids', allergens: '🌾🥚', price: '10', description: 'Bife de Frango Panado com Chips de Batata' },
          { name: 'Mini Hambúrguers', allergens: '🌾🥛⚗️', price: '12', description: 'Pão, Carne Vitela, Queijo e Chips Batata' },
        ]
      }
    ]
  },
  {
    name: 'Tacos',
    icon: <Pizza size={20} />,
    items: [
      { name: 'Frango', allergens: '🌾🌱', price: '3,5', description: '' },
      { name: 'Camarão', allergens: '🌾🌱🐚', price: '4,5', description: '' },
    ]
  },
  {
    name: 'Acompanhamentos',
    icon: <Utensils size={20} />,
    items: [
      { name: 'Chips de Batata Doce', allergens: '', price: '3,5', description: '' },
      { name: 'Chips de Batata', allergens: '', price: '2,5', description: '' },
      { name: 'Chips c/ Cheddar e Bacon', allergens: '🥛⚗️', price: '3,8', description: '' },
      { name: 'Sopa', allergens: '🌾🌱', price: '2,50', description: '' },
    ]
  },
  {
    name: 'Para Partilhar',
    icon: <Users size={20} />,
    items: [
      { name: 'Gambas à Brás', allergens: '🌾🥛🥚🐚', price: '9', description: '' },
      { name: 'Ovos Rotos', allergens: '🌾🥛🥚', price: '8,5', description: '' },
      { name: 'Shakshuka', allergens: '🌾🥚', price: '9', description: 'Tomatada com Pimentos e Ovos Escalfados' },
      { name: 'Brás de Alheira', allergens: '🌾🥚⚗️', price: '8', description: '' },
      { name: 'Burrata', allergens: '🌾🥛🥚', price: '9,5', description: '' },
    ]
  },
  {
    name: 'Bebidas',
    icon: <Beer size={20} />,
    subcategories: [
      {
        title: 'Bebidas',
        items: [
          { name: 'Sangria Maracujá 1L', allergens: '', price: '17', description: '' },
          { name: 'Sangria Frutos Vermelhos', allergens: '', price: '16', description: '' },
          { name: 'Refrigerantes', allergens: '', price: '2,50', description: '' },
          { name: 'Água 0.75L', allergens: '', price: '1,8', description: '' },
          { name: 'Água 0.375L', allergens: '', price: '1,5', description: '' },
          { name: 'Água c/ Gás', allergens: '', price: '1,7', description: '' },
          { name: 'Água c/ Gás Sabores', allergens: '', price: '2', description: '' },
          { name: 'Super Bock 33cl', allergens: '', price: '2', description: '' },
          { name: 'Super Bock Stout 33cl', allergens: '', price: '2,5', description: '' },
          { name: 'Cerveja Artesanal', allergens: '', price: '5,5', description: '' },
          { name: 'Cerveja s/ àlcool', allergens: '', price: '2', description: '' },
          { name: 'Somersby', allergens: '', price: '2,7', description: '' },
        ]
      },
      {
        title: 'Smoothies',
        items: [{ name: 'Frutos Vermelhos', allergens: '🥛', price: '4', description: '' }]
      },
      {
        title: 'Cocktails',
        items: [
          { name: 'Sex On the Beach', allergens: '', price: '6', description: '' },
          { name: 'Piña Colada', allergens: '', price: '7', description: '' },
          { name: 'Gin Tónico', allergens: '', price: '8,5', description: '' },
          { name: 'Sex On the Beach s/ Álcool', allergens: '', price: '4,5', description: '' },
        ]
      },
      {
        title: 'Cafetaria',
        items: [
          { name: 'Expresso/Descafeinado', allergens: '', price: '1', description: '' },
          { name: 'Expresso Pingado', allergens: '🥛', price: '1,20', description: '' },
          { name: 'Caramelo Machiatto', allergens: '🥛', price: '3,50', description: '' },
          { name: 'Latte Machiatto', allergens: '🥛', price: '3', description: '' },
          { name: 'Cappucino', allergens: '🥛', price: '2,50', description: '' },
          { name: 'Cappucino de Caramelo', allergens: '🥛', price: '2,70', description: '' },
          { name: 'Café Latte', allergens: '🥛', price: '2', description: '' },
          { name: 'Café Americano', allergens: '', price: '1,80', description: '' },
          { name: 'Expresso Duplo', allergens: '', price: '2', description: '' },
          { name: 'Cevada', allergens: '🌾', price: '1', description: '' },
          { name: 'Cevada Dupla', allergens: '🌾', price: '1,5', description: '' },
          { name: 'Mocha', allergens: '🥛', price: '3,50', description: '' },
          { name: 'Chá', allergens: '', price: '1,50', description: '' },
          { name: 'Chocolate Quente', allergens: '🥛🌱', price: '3,5', description: '' },
          { name: 'Leite Aveia', allergens: '🥛', price: '+0,50', description: '' },
          { name: 'Leite s/ Lactose', allergens: '', price: '+0,50', description: '' },
        ]
      },
      {
        title: 'Sumos Naturais',
        items: [
          { name: 'Limonada', allergens: '', price: '3', description: '' },
          { name: 'Sumo do Dia', allergens: '', price: '3,30', description: '' },
          { name: 'Sumo de Laranja', allergens: '', price: '3,50', description: '' },
          { name: 'Sumo de Ananás & Hortelã', allergens: '', price: '4,20', description: '' },
          { name: 'Sumo Verde (fins-de-semana)', allergens: '', price: '4', description: '' },
        ]
      }
    ]
  },
  {
    name: 'Sobremesas',
    icon: <IceCream size={20} />,
    subcategories: [
      {
        title: 'Sobremesas',
        items: [
          { name: 'Brownie Chocolate', allergens: '🌾🥛🥚🌱', price: '6', description: 'c/ Gelado' },
          { name: 'French Toast Frutos Vermelhos', allergens: '🌾🥛🥚', price: '5,5', description: 'Frutos Vermelhos, Iogurte e Gelado' },
          { name: 'French Toast Tiramisu', allergens: '🌾🥛', price: '6,5', description: '' },
          { name: 'French Toast Maçã', allergens: '🌾🥛', price: '7,5', description: 'c/ Gelado de Maçã Assada' },
        ]
      },
      {
        title: 'Bowls',
        items: [
          { name: 'Açaí', allergens: '🌾🥜', price: '10', description: 'Açaí, Granola e Fruta Variada' },
          { name: 'Iogurte', allergens: '🌾🥛🥜', price: '7', description: 'Iogurte Natural, Granola, Fruta Variada e Mel' },
        ]
      }
    ]
  },
  {
    name: 'Panquecas',
    icon: <IceCream size={20} />,
    items: [
      { name: 'Natura', allergens: '', price: '6', description: 'Servido com Fruta Variada e Mel' },
      { name: 'Banoffee', allergens: '🌾🥛🥚', price: '6,5', description: 'Creme Banoffee, Banana' },
      { name: 'Avelã', allergens: '🌾🥛🥚🥜', price: '6,5', description: 'Creme de Avelã, Crumble de Amêndoa e Gelado de Baunilha' },
      { name: 'Pistachio', allergens: '🌾🥛🥜', price: '7,5', description: 'Creme de Pistachio, Framboesa e Crumble de Pistachio' },
      { name: 'Red Velvet', allergens: '🌾🥛🥚', price: '7,5', description: 'Massa Red Velvet, Creme Baunilha e Frutos Vermelhos' },
      { name: 'Royal', allergens: '🌾🥛🥚🐟', price: '9,8', description: 'Pasta de Abacate, Salmão Fumado, Ovos Escalfados e Molho Holandês' },
    ]
  },
  {
    name: 'Alergénios',
    icon: <Info size={20} />,
    isLegend: true,
    items: [
      { name: 'Glúten', icon: '🌾' },
      { name: 'Leite / Lactose', icon: '🥛' },
      { name: 'Amendoim', icon: '🥜' },
      { name: 'Peixes', icon: '🐟' },
      { name: 'Ovos', icon: '🥚' },
      { name: 'Moluscos', icon: '🐚' },
      { name: 'Sulfitos', icon: '⚗️' },
      { name: 'Oleoginosas', icon: '🌰' },
      { name: 'Mostarda', icon: '🧴' },
      { name: 'Soja', icon: '🌱' },
    ]
  }
];

function MenuItem({ name, allergens, price, description, color = 'var(--primary)' }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '15px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: color, fontFamily: 'var(--font-body)' }}>
          {name} <span style={{ marginLeft: '5px', opacity: 0.8, fontSize: '0.9rem' }}>{allergens}</span>
        </h4>
        <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
          {price}€
        </span>
      </div>
      {description && (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '4px', lineHeight: '1.4' }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function MenuAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="menu" aria-label="Menu do restaurante" style={{ padding: '80px 0' }}>
      <h2 className="section-title">Menu</h2>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          border: '1px solid rgba(208,168,75,0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {menuData.map((category, index) => (
          <div
            key={index}
            style={{
              borderBottom: index !== menuData.length - 1 ? '1px solid rgba(208,168,75,0.1)' : 'none',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-expanded={openIndex === index}
              aria-controls={`menu-panel-${index}`}
              id={`menu-tab-${index}`}
              style={{
                width: '100%',
                padding: '24px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                backgroundColor: (openIndex === index || hoveredIndex === index) ? 'rgba(208,168,75,0.08)' : 'transparent',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <span style={{ color: (openIndex === index || hoveredIndex === index) ? 'var(--primary)' : 'var(--text-white)', transition: 'color 0.3s' }}>
                  {category.icon}
                </span>
                <span style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  color: (openIndex === index || hoveredIndex === index) ? 'var(--text-white)' : 'var(--primary)',
                  transition: 'color 0.3s'
                }}>
                  {category.name}
                </span>
              </div>
              <span style={{ color: (openIndex === index || hoveredIndex === index) ? 'var(--primary)' : 'var(--primary)', opacity: (openIndex === index || hoveredIndex === index) ? 1 : 0.7, transition: 'all 0.3s' }}>
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`menu-panel-${index}`}
                  role="region"
                  aria-labelledby={`menu-tab-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '30px', borderTop: '1px solid rgba(208,168,75,0.05)' }}>
                    {category.note && (
                      <p style={{ color: 'var(--primary)', fontStyle: 'italic', marginBottom: '20px', fontSize: '0.9rem' }}>
                        {category.note}
                      </p>
                    )}

                    {category.isLegend ? (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
                        {category.items.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-white)' }}>
                            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                            <span style={{ fontFamily: 'var(--font-body)' }}>{item.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : category.subcategories ? (
                      category.subcategories.map((sub, si) => (
                        <div key={si} style={{ marginBottom: si !== category.subcategories.length - 1 ? '40px' : '0' }}>
                          <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '20px', fontFamily: 'var(--font-heading)', borderBottom: '1px solid rgba(208,168,75,0.2)', paddingBottom: '8px' }}>
                            {sub.title}
                          </h3>
                          {sub.note && (
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontStyle: 'italic' }}>
                              {sub.note}
                            </p>
                          )}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px 40px' }}>
                            {sub.items.map((item, ii) => (
                              <MenuItem key={ii} {...item} color={category.name === 'Bebidas' ? 'var(--text-white)' : 'var(--primary)'} />
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px 40px' }}>
                        {category.items.map((item, ii) => (
                          <MenuItem key={ii} {...item} color={category.name === 'Bebidas' ? 'var(--text-white)' : 'var(--primary)'} />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
