import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

/* Função do botão */ 
function MyButton () {
  const [count, setCount] = useState(0);
      function handleClick() {
        setCount(count + 1);
      }
    
      return (
        <button onClick={handleClick}>
        Clicaste {count} vezes!
        </button>
      );
}
/* Fim da função do botão */


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


/* Função de produtos */
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
/* Fim da função de produtos */
function Profile () {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize
        }}
      />
    </>
  );
}

function AdminPanel() {
  return (
    <div>Painel do Administrador</div>
  )
}
function LoginForm() {
  return (
    <div>Login Form</div>
  )
}
let content;
var isLoggedIn  = new Boolean(true);

if (isLoggedIn) {
content = <AdminPanel/>;
} else {
content = <LoginForm/>;
}

/* importar mokUP*/
function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
/* Caixa de pesquisa*/
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

/* tabel de produtos */
function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}





const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App() {
  return (
    <div className='container'>
      <h1> Bem-vindo a minha aplicação</h1>
      <MyButton/>
     
      <div className='perfil'>
        <Profile/>
      </div> 

      <div className='splist'>
       <ShoppingList/>  
       </div>
       
       <div className='UI'>
       {content}
       </div>

       <div className='tblprodt'>
       <FilterableProductTable products={PRODUCTS} />
       </div>

      </div>     
  );
}


export default App;
