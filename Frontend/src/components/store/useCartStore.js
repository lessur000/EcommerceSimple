import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  itemAmount: 0,
  subTotal: 0,
  total: 0,
  deliveryFee: 25,
  discount: 0, // Start with no discount

  // Add to cart
  addToCart: (product, id) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.id === id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, id, amount: 1 }];
    }

    set({ cart: updatedCart });
    get().calculateTotals();
  },

  // Remove item
  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    set({ cart: updatedCart });
    get().calculateTotals();
  },

  increaseAmount: (id, product) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.id === id);
  
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
    } else if (product) {
      updatedCart = [...cart, { ...product, id, amount: 1 }];
    } else {
      return;
    }
  
    set({ cart: updatedCart });
    get().calculateTotals();
  },

  // Decrease item quantity
  decreaseAmount: (id) => {
    let updatedCart = get()
      .cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount > 0); // Filter out items with amount <= 0

    set({ cart: updatedCart });
    get().calculateTotals();
  },

  // Clear cart
  clearCart: () => {
    set({
      cart: [],
      itemAmount: 0,
      subTotal: 0,
      total: 0,
      discount: 0, // Reset discount when clearing cart
    });
  },

  // Recalculate totals
  calculateTotals: () => {
    const cart = get().cart;
    // If cart is empty, reset values
    if (cart.length === 0) {
      set({
        itemAmount: 0,
        subTotal: 0,
        discount: 0, // No discount when cart is empty
        deliveryFee: 25, // Reset delivery fee to 25 when cart is empty
        total: 25, // Total will be just the delivery fee when cart is empty
      });
      return;
    }
    // Calculate the total item count
    const itemAmount = cart.reduce((acc, item) => acc + item.amount, 0);
    // Calculate subtotal
    const subTotal = cart.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );

    // Apply incremental discount based on item amount
    let discount = 0;
    if (itemAmount >= 10) {
      discount = 0.15; // 15% discount for 10 or more items
    } else if (itemAmount >= 5) {
      discount = 0.1; // 10% discount for 5 or more items
    } else if (itemAmount >= 3) {
      discount = 0.05; // 5% discount for 3 or more items
    }

    // Apply discount to subtotal
    let discountAmount = subTotal * discount;
    // Cap the discount to ensure it doesn't exceed the subtotal
    if (discountAmount > subTotal) {
      discountAmount = subTotal;
    }
    // Cap the discount to a maximum
    if (discountAmount > 10000) {
      discountAmount = 10000;
    }
    // Calculate total: subtotal + delivery fee - discount
    const deliveryFee = get().deliveryFee;
    const total = subTotal + deliveryFee - discountAmount;
    set({ itemAmount, subTotal, discount: discountAmount, deliveryFee, total });
  },
}));

export default useCartStore;
