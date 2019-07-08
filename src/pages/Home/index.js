import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg"
          alt="Tenis"
        />
        <strong>Tenis Massa</strong>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
