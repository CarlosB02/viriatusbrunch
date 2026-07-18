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
  Soup,
  Users,
  Info,
  Hamburger,
  Salad,
  Croissant,
  Dessert,
  CupSoda,
  SquareMenu,
  Waves,
  Flame
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const getMenuData = (t) => [
  {
    name: t('menu.categories.tostas') || 'Tostas',
    icon: <Sandwich size={20} />,
    items: [
      { name: t('menu.items.frango') || 'Frango', allergens: '🌾🥛', price: '9,5', description: t('menu.desc.frango') || 'Tosta, Pickles Couve Roxa, Cream Cheese, Frango Grelhado, Molho Barbecue Caseiro' },
      { name: t('menu.items.cogumelos_figos') || 'Cogumelos & Figos', allergens: '🌾🥛', price: '13,5', description: t('menu.desc.cogumelos_figos') || 'Tosta, Cogumelos, Compota de Figos e Burrata' },
      { name: t('menu.items.pesto_grao') || 'Pesto & Grão', allergens: '🌾🥛🥜', price: '5', description: t('menu.desc.pesto_grao') || 'Tosta, abacate, pesto e humus de beterraba' },
      { name: t('menu.items.salmao') || 'Salmão', allergens: '🌾🥛🥚🐟', price: '13,5', description: t('menu.desc.salmao') || 'Tosta, Cream Cheese, Polpa de Maracujá, Ovos Escalfados e Salmão Fumado' },
      { name: t('menu.items.mista') || 'Mista', allergens: '🌾', price: '3,75', description: '' },
      { name: t('menu.items.torrada') || 'Torrada', allergens: '🌾', price: '2,2', description: '' },
    ]
  },
  {
    name: t('menu.categories.burgers') || 'Hambúrgueres Artesanais',
    icon: <Hamburger size={20} />,
    items: [
      { name: t('menu.items.vegetariano') || 'Vegetariano', allergens: '🌾🥛', price: '8,5', description: t('menu.desc.vegetariano') || 'Pão Hambúrger, Alface, Tomate, Hambúrger Grão de Bico, Queijo Cheedar e Cebola Caramelizada' },
      { name: t('menu.items.viriatus') || 'Viriatus', allergens: '🌾🥛', price: '12', description: t('menu.desc.viriatus_burger') || 'Pão Hambúrger, Alface, Tomate, Carne Vitela, Queijo Cheedar e Cebola Caramelizada' },
      { name: t('menu.items.crispy_chicken') || 'Crispy Chicken', allergens: '🌾🥛🥚', price: '10,5', description: t('menu.desc.crispy_chicken') || 'Pão Hambúrger, Hambúrger de Frango, Bacon, Alface, Tomate, Cheddar e Cebola Caramelizada' },
      { name: t('menu.items.cheeseburger') || 'CheeseBurger', allergens: '🌾🥛🥚', price: '12', description: t('menu.desc.cheeseburger') || 'Pão Brioche, Hambúrger de Vitela, Cheddar, Pickles de Pepino e Cebola Caramelizada' },
    ]
  },
  {
    name: t('menu.categories.english') || 'English Breakfast',
    icon: <Waves size={20} style={{ transform: 'rotate(90deg)' }} />,
    items: [
      { name: t('menu.items.english_breakfast') || 'English Breakfast', allergens: '🌾🥛🥚', price: '13,5', description: t('menu.desc.english_breakfast') || 'Torrada, Salsicha, Baked Beans, Ovos Estrelados, Presunto, Tomate Cherry Confitado e Cogumelos Salteados' },
    ]
  },
  {
    name: t('menu.categories.saladas_massas') || 'Saladas e Massas',
    icon: <Salad size={20} />,
    subcategories: [
      {
        title: t('menu.sub.saladas') || 'Saladas',
        items: [
          { name: t('menu.items.gambas') || 'Gambas', allergens: '🌾🧴🐚', price: '13', description: t('menu.desc.gambas_salada') || 'Base Folhas, Gambas, Abacate, Croutons, Molho de Maracujá, Tomate Cherry e Manga' },
          { name: t('menu.items.capri') || 'Capri', allergens: '🥥⚗️🥛', price: '11', description: t('menu.desc.capri_salada') || 'Base Folhas, Burrata, Melão/Meloa, Presunto, Molho Vinagrete Azeite e Pistácio' },
          { name: t('menu.items.crispy_chicken') || 'Crispy Chicken', allergens: '🌾🥛🥚', price: '8,5', description: t('menu.desc.crispy_salada') || 'Alface Iceberg, Frango Panado, Croutons, Bacon, Cebola Frita, Maionese de Salsa e Parmesão' },
          { name: t('menu.items.vegetariana') || 'Vegetariana', allergens: '🌾⚗️', price: '9', description: t('menu.desc.vegetariana_salada') || 'Base Folhas, Hortelã, Pepino, Tomate Cherry, Molho Vinagrete, Croutons e Almondegas de Grão de Bico' },
          { name: t('menu.items.cesar') || 'Cesar', allergens: '🌾🥛🧴', price: '9', description: t('menu.desc.cesar_salada') || 'Base de Folhas, Tomate Cherry, Croutons, Frango, Molho Cesar e Parmesão Ralado' },
        ]
      },
      {
        title: t('menu.sub.massas') || 'Massas',
        items: [
          { name: t('menu.items.nero') || 'Nero', allergens: '🌾🐚', price: '9,5', description: t('menu.desc.nero_massa') || 'Spaghetti Negra, Alho e Gambas' },
          { name: t('menu.items.viriatus') || 'Viriatus', allergens: '🌾🥛🐚', price: '9', description: t('menu.desc.viriatus_massa') || 'Massa, Molho Tomate, Bacon, Cebola Frita, Parmesão Ralado e Camarão' },
        ]
      }
    ]
  },
  {
    name: t('menu.categories.french_toast') || 'French Toast',
    icon: <Croissant size={20} />,
    items: [
      { name: t('menu.items.viriatus') || 'Viriatus', allergens: '🌾🥛🥚', price: '8', description: t('menu.desc.viriatus_french') || 'Pão Brioche, Cream Cheese, Presunto, Ovo Escalfado, Rúcula e Compota' },
      { name: t('menu.items.salmao') || 'Salmão', allergens: '🌾🥛🐟🌱', price: '13,5', description: t('menu.desc.salmao_french') || 'Pão Brioche, Abacate, Cream Cheese Aromatizado, Salmão Fumado e Molho Teriaki' },
      { name: t('menu.items.maca') || 'Maçã', allergens: '🌾🥛', price: '7,5', description: t('menu.desc.maca_french') || 'c/ Gelado de Maçã Assada' },
      { name: t('menu.items.tiramisu') || 'Tiramisu', allergens: '🌾🥛', price: '7,5', description: 'Tiramisu' },
      { name: t('menu.items.frutos_vermelhos') || 'Frutos Vermelhos', allergens: '🌾🥛🥚', price: '6,5', description: t('menu.desc.frutos_french') || 'Pão Brioche, Frutos Vermelhos e Gelado de Frutos Vermelhos' },
    ]
  },
  {
    name: t('menu.categories.ovos') || 'Ovos',
    icon: <Egg size={20} />,
    note: t('menu.note.ovos') || '(Opção em Tosta, Croissant ou Bagel)',
    items: [
      { name: t('menu.items.benedict') || 'Benedict', allergens: '🌾🥛🥚', price: '8', description: t('menu.desc.benedict') || 'Pasta de Abacate, Ovos Escalfados, Bacon, Molho Holandês e Cebolinho' },
      { name: t('menu.items.mexidos') || 'Mexidos', allergens: '🌾🥚⚗️', price: '7,5', description: t('menu.desc.mexidos') || 'Opção: Bacon ou Cogumelos ou Alheira' },
    ]
  },
  {
    name: t('menu.categories.menus') || 'Menus',
    icon: <SquareMenu size={20} />,
    subcategories: [
      {
        title: t('menu.sub.brunch') || 'Menu Brunch',
        items: [
          { name: t('menu.items.viriatus') || 'Viriatus', allergens: '🌾🥛🥚🥜🧴', price: '17', description: t('menu.desc.brunch_viriatus') || 'Ovos Mexidos c/ Bacon ou Cogumelos, ou Alheira • Croissant Folhado e Torrada • Mini Bowl de Iogurte • Mini Panquecas • Fruta Laminada • Sumo do Dia ou Latte ou Cerveja • 1 fatia de queijo e fiambre (opcional: pasta de abacate +5)' },
          { name: t('menu.items.rossio') || 'Rossio', allergens: '🌾🥛🥚🥜', price: '16', description: t('menu.desc.brunch_rossio') || 'Tosta ou Ovos à Escolha • Mini Bowl de Iogurte • Mini Panquecas • Sumo do Dia ou Latte (Excepto Tosta de Cogumelos e Figos e Tosta de Salmão) Custo de +5' },
        ]
      },
      {
        title: t('menu.sub.kids') || 'Menu Kids',
        note: t('menu.note.kids') || 'Até aos 12 anos (inclui: Sumo do Dia + Bola de Gelado)',
        items: [
          { name: t('menu.items.mini_bitoque') || 'Mini Bitoque', allergens: '🥚', price: '10', description: t('menu.desc.bitoque_kids') || 'Bife de Frango, Ovo Estrelado e Chips de Batata' },
          { name: t('menu.items.mini_hamburguers') || 'Mini Hambúrguers', allergens: '🌾🥛⚗️', price: '12', description: t('menu.desc.burgers_kids') || 'Pão, Carne Vitela, Queijo e Chips Batata' },
        ]
      }
    ]
  },
  {
    name: t('menu.categories.tacos_poke') || 'Tacos e Poke',
    icon: <Flame size={20} />,
    subcategories: [
      {
        title: t('menu.sub.tacos') || 'Tacos',
        items: [
          { name: t('menu.items.frango') || 'Frango', allergens: '🌾🌱', price: '3,5', description: '' },
          { name: t('menu.items.camarao') || 'Camarão', allergens: '🌾🌱🐚', price: '4,5', description: '' },
        ]
      },
      {
        title: t('menu.sub.poke') || 'Poke',
        note: t('menu.desc.poke_base') || 'Base de Arroz, Pepino, Tomate Cherry, Pickles de Couve Roxa e Abacate',
        items: [
          { name: t('menu.items.salmao') || 'Salmão', allergens: '🐟🥛⚗️', price: '13', description: t('menu.desc.salmao_poke') || 'Salmão e Cream Cheese Aromatizado' },
          { name: t('menu.items.crispy_chicken') || 'Crispy Chicken', allergens: '🥚🥛⚗️', price: '13', description: t('menu.desc.crispy_chicken_poke') || 'Frango Panado' },
          { name: t('menu.items.gambas') || 'Gambas', allergens: '🐚⚗️', price: '13', description: t('menu.desc.gambas_poke') || 'Gambas Salteadas' },
        ]
      }
    ]
  },
  {
    name: t('menu.categories.acompanhamentos') || 'Acompanhamentos',
    icon: <Utensils size={20} />,
    items: [
      { name: t('menu.items.chips_doce') || 'Chips de Batata Doces', allergens: '', price: '3,5', description: '' },
      { name: t('menu.items.chips_batata') || 'Chips de Batata', allergens: '', price: '2,5', description: '' },
      { name: t('menu.items.chips_cheddar') || 'Chips c/ Cheddar e Bacon', allergens: '🥛⚗️', price: '3,8', description: '' },
      { name: t('menu.items.sopa') || 'Sopa', allergens: '🌾🌱', price: '3', description: '' },
    ]
  },
  {
    name: t('menu.categories.partilhar') || 'Para Partilhar',
    icon: <Users size={20} />,
    items: [
      { name: t('menu.items.gambas_bras') || 'Gambas à Brás', allergens: '🌾🥛🥚🐚', price: '10', description: '' },
      { name: t('menu.items.ovos_rotos') || 'Ovos Rotos', allergens: '🌾🥛🥚', price: '9,5', description: '' },
      { name: t('menu.items.bras_alheira') || 'Brás de Alheira', allergens: '🌾🥚⚗️', price: '8', description: '' },
    ]
  },
  {
    name: t('menu.categories.bebidas') || 'Bebidas',
    icon: <CupSoda size={20} />,
    subcategories: [
      {
        title: t('menu.categories.bebidas') || 'Bebidas',
        items: [
          { name: t('menu.items.sangria_limoncello') || 'Sangria Limoncello', allergens: '⚗️', price: '17', description: '' },
          { name: t('menu.items.sangria_maracuja') || 'Sangria Maracujá', allergens: '⚗️', price: '17', description: '' },
          { name: t('menu.items.sangria_frutos') || 'Sangria Frutos Vermelhos', allergens: '⚗️', price: '17', description: '' },
          { name: t('menu.items.refrigerantes') || 'Refrigerantes', allergens: '', price: '3', description: '' },
          { name: t('menu.items.agua_pequena') || 'Água 0.375L', allergens: '', price: '1,8', description: '' },
          { name: t('menu.items.agua') || 'Água 0.75L', allergens: '', price: '2,2', description: '' },
          { name: t('menu.items.agua_gas') || 'Água c/ Gás', allergens: '', price: '2', description: '' },
          { name: t('menu.items.agua_gas_sabores') || 'Água c/ Gás Sabores', allergens: '', price: '2', description: '' },
          { name: t('menu.items.superbock') || 'Superbock 33cl', allergens: '🌾', price: '2,2', description: '' },
          { name: t('menu.items.superbock_stout') || 'Superbock Stout 33cl', allergens: '🌾', price: '2,8', description: '' },
          { name: t('menu.items.cerveja_artesanal') || 'Cerveja Artesanal', allergens: '🌾', price: '5,5', description: '' },
          { name: t('menu.items.cerveja_sem_alcool') || 'Cerveja s/ àlcool', allergens: '🌾', price: '2,2', description: '' },
          { name: t('menu.items.somersby') || 'Somersby', allergens: '🌾', price: '3,2', description: '' },
        ]
      },
      {
        title: t('menu.sub.smoothies') || 'Smoothies',
        items: [
          { name: t('menu.items.frutos_vermelhos') || 'Frutos Vermelhos', allergens: '🥛', price: '4', description: '' },
          { name: t('menu.items.tropical') || 'Tropical', allergens: '🥛', price: '4', description: '' },
        ]
      },
      {
        title: t('menu.sub.cocktails') || 'Cocktails',
        note: t('menu.note.alcool') || 'Vendas de bebidas alcoólicas só é permitida a idade superior a 18 anos.',
        items: [
          { name: t('menu.items.sex_on_the_beach') || 'Sex On the Beach', allergens: '', price: '7', description: '' },
          { name: t('menu.items.pina_colada') || 'Piña Colada', allergens: '', price: '7,5', description: '' },
          { name: t('menu.items.gin_tonico') || 'Gin Tónico', allergens: '', price: '8,5', description: '' },
          { name: t('menu.items.sex_on_the_beach_sem_alcool') || 'Sex On the Beach s/ Álcool', allergens: '', price: '5', description: '' },
          { name: t('menu.items.limoncello_spritz') || 'Limoncello Spritz', allergens: '⚗️', price: '8,5', description: '' },
          { name: t('menu.items.aperol_spritz') || 'Aperol Spritz', allergens: '⚗️', price: '9', description: t('menu.desc.aperol_spritz') || 'Copo: 9€ | Jarra: 20€' },
        ]
      },
      {
        title: t('menu.sub.cafetaria') || 'Cafetaria',
        items: [
          { name: t('menu.items.expresso_descafeinado') || 'Expresso/Descafeinado', allergens: '', price: '1,2', description: '' },
          { name: t('menu.items.expresso_pingado') || 'Expresso Pingado', allergens: '🥛', price: '1,4', description: '' },
          { name: t('menu.items.caramelo_macchiato') || 'Caramelo Machiatto', allergens: '🥛', price: '3,5', description: '' },
          { name: t('menu.items.latte_macchiato') || 'Latte Machiatto', allergens: '🥛', price: '3,5', description: '' },
          { name: t('menu.items.cappuccino') || 'Cappucino', allergens: '🥛', price: '2,8', description: '' },
          { name: t('menu.items.cappuccino_caramelo') || 'Cappucino Caramelo', allergens: '🥛', price: '2,8', description: '' },
          { name: t('menu.items.cafe_latte') || 'Café Latte', allergens: '🥛', price: '2,8', description: '' },
          { name: t('menu.items.cafe_americano') || 'Café Americano', allergens: '', price: '2', description: '' },
          { name: t('menu.items.expresso_duplo') || 'Expresso Duplo', allergens: '', price: '2,4', description: '' },
          { name: t('menu.items.cevada') || 'Cevada', allergens: '🌾', price: '1,2', description: '' },
          { name: t('menu.items.cevada_dupla') || 'Cevada Dupla', allergens: '🌾', price: '1,8', description: '' },
          { name: t('menu.items.mocha') || 'Mocha', allergens: '🥛', price: '3,5', description: '' },
          { name: t('menu.items.cha') || 'Chá', allergens: '', price: '1,8', description: '' },
          { name: t('menu.items.leite_aveia') || 'Leite Aveia', allergens: '🥛', price: '+0,50', description: '' },
          { name: t('menu.items.leite_sem_lactose') || 'Leite s/ Lactose', allergens: '', price: '+0,50', description: '' },
        ]
      },
      {
        title: t('menu.sub.sumos') || 'Sumos Naturais',
        items: [
          { name: t('menu.items.limonada') || 'Limonada', allergens: '', price: '3', description: '' },
          { name: t('menu.items.sumo_dia') || 'Sumo do Dia', allergens: '', price: '3,5', description: '' },
          { name: t('menu.items.sumo_laranja') || 'Sumo de Laranja', allergens: '', price: '3,5', description: '' },
          { name: t('menu.items.sumo_ananâs') || 'Sumo de Ananás & Hortelã', allergens: '', price: '4,2', description: '' },
        ]
      }
    ]
  },
  {
    name: t('menu.categories.sobremesas') || 'Sobremesas',
    icon: <IceCream size={20} />,
    subcategories: [
      {
        title: t('menu.categories.sobremesas') || 'Sobremesas',
        items: [
          { name: t('menu.items.brownie') || 'Brownie Chocolate', allergens: '🌾🥛🥚🌱', price: '6', description: t('menu.desc.gelado') || 'c/ Gelado' },
          { name: t('menu.items.french_frutos_vermelhos') || 'French Toast Frutos Vermelhos', allergens: '🌾🥛🥚', price: '6,5', description: t('menu.desc.french_frutos') || 'Pão Brioche, Frutos Vermelhos e Gelado de Frutos Vermelhos' },
          { name: t('menu.items.french_tiramisu') || 'French Toast Tiramisu', allergens: '🌾🥛', price: '7,5', description: '' },
          { name: t('menu.items.french_maca') || 'French Toast Maçã', allergens: '🌾🥛', price: '7,5', description: t('menu.desc.french_maca') || 'c/ Gelado de Maçã Assada' },
        ]
      },
      {
        title: t('menu.sub.bowls') || 'Bowls',
        items: [
          { name: t('menu.items.acai') || 'Açaí', allergens: '🌾🌰', price: '10', description: t('menu.desc.acai') || 'Açaí, Granola e Fruta Variada' },
          { name: t('menu.items.iogurte') || 'Iogurte', allergens: '🌾🥛🌰', price: '7', description: t('menu.desc.iogurte') || 'Iogurte Natural, Granola, Fruta Variada e Mel' },
          { name: t('menu.items.mini_bowl_iogurte') || 'Mini Bowl Iogurte', allergens: '🌾🥛🌰', price: '4', description: t('menu.desc.mini_bowl') || 'Iogurte Natural, Granola, Mel e Mirtilos' },
        ]
      }
    ]
  },
  {
    name: t('menu.categories.panquecas') || 'Panquecas',
    icon: <Dessert size={20} />,
    items: [
      { name: t('menu.items.frutos_vermelhos') || 'Frutos Vermelhos', allergens: '🥛🥚⚗️', price: '6,5', description: t('menu.desc.frutos_vermelhos') || 'Compota Artesanal de Frutos Vermelhos e Bola de Gelado de Baunilha' },
      { name: t('menu.items.natura') || 'Natura', allergens: '🥛', price: '6', description: t('menu.desc.natura_panqueca') || 'Servido com Fruta Variada e Mel' },
      { name: t('menu.items.avela') || 'Avelã', allergens: '🌾🥛🥚🥜', price: '6,5', description: t('menu.desc.avela_panqueca') || 'Creme de Avelã, Crumble de Amêndoa e Gelado de Baunilha' },
      { name: t('menu.items.pistachio') || 'Pistachio', allergens: '🌾🥛🥜', price: '7,5', description: t('menu.desc.pistachio_panqueca') || 'Creme de Pistachio, Framboesa e Crumble de Pistachio' },
      { name: t('menu.items.mini_panquecas') || 'Mini Panquecas', allergens: '🥛🥚', price: '2,5', description: t('menu.desc.mini_panquecas') },
    ]
  },
  {
    name: t('menu.categories.alergenios') || 'Alergénios',
    icon: <Info size={20} />,
    isLegend: true,
    items: [
      { name: t('menu.allergens.gluten') || 'Glúten', icon: '🌾' },
      { name: t('menu.allergens.leite') || 'Leite / Lactose', icon: '🥛' },
      { name: t('menu.allergens.amendoim') || 'Amendoim', icon: '🥜' },
      { name: t('menu.allergens.peixes') || 'Peixes', icon: '🐟' },
      { name: t('menu.allergens.ovos') || 'Ovos', icon: '🥚' },
      { name: t('menu.allergens.moluscos') || 'Moluscos', icon: '🐚' },
      { name: t('menu.allergens.sulfitos') || 'Sulfitos', icon: '⚗️' },
      { name: t('menu.allergens.oleoginosas') || 'Oleoginosas', icon: '🌰' },
      { name: t('menu.allergens.mostarda') || 'Mostarda', icon: '🧴' },
      { name: t('menu.allergens.soja') || 'Soja', icon: '🌱' },
      { name: t('menu.allergens.tremoco') || 'Tremoço', icon: '🫘' },
      { name: t('menu.allergens.aipo') || 'Aipo', icon: '🥬' },
      { name: t('menu.allergens.frutos_casca_rija') || 'Frutos de Casca Rija', icon: '🥥' },
      { name: t('menu.allergens.crustaceos') || 'Crustáceos', icon: '🦀' },
    ]
  }
];

function MenuItem({ name, allergens, price, description, color = 'var(--text-white)' }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '15px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: color, fontFamily: 'var(--font-body)' }}>
          {name} <span style={{ marginLeft: '5px', opacity: 0.8, fontSize: '0.9rem', color: 'var(--text-gray)' }}>{allergens}</span>
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
  const { t } = useLanguage();
  const menuData = getMenuData(t);

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
                              <MenuItem key={ii} {...item} />
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px 40px' }}>
                        {category.items.map((item, ii) => (
                          <MenuItem key={ii} {...item} />
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
