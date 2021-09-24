import React, {
    useContext,
    createContext,
    useState,
    useEffect
  } from 'react';
  
type Ticket = {
  name: string,
  description: string,
  price: number,
  type: string
  image: string,
}
  
  interface ICartContextProps {
    cart: Ticket[];
    total: number;
    add: (item: Ticket) => void;
    clear: () => void 
  }
  
  const CartContext = createContext({} as ICartContextProps);
  
  export default function CartProvider({children}:any){
    const [cart, setCart] = useState<Ticket[]>([]);
    const [total, setTotal] = useState<number>(0);
  
    function add (item: Ticket){
      const newCart = [...cart];
  
      const itemAlreadyExists = newCart.find((ticket) => ticket === item);
      
      if(!itemAlreadyExists) newCart.push(item);
  
      setCart(newCart);
    }
  
    // function remove(item: ticket){
    //   const newCart = cart.filter((ticket) => item.id !== ticket.id )
    //   setCart([...newCart]);
    // }
  
    function clear(){
      setCart([]);
    }
  
    useEffect(() => {
      let newTotal = 0;
      cart.forEach(product => {
  
        newTotal = Number (product.price) + newTotal;
      })
      setTotal(newTotal);
    }, [cart])
  
  
    const store: ICartContextProps = {
      add,
      cart,
      total,
      clear,
    }
  
    return (
      <CartContext.Provider value={store}>
        {children}
      </CartContext.Provider>
    )
  }
  
  export function useCart() {
    const context = useContext(CartContext);
  
    const { 
      cart,
      add, 
      total,
      clear
    } = context;
  
    return {
      cart,
      add,
      total,
      clear
    }
  }