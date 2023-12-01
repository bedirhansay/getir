export const cartReducers = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      const data = Object.values(action.payload);
      return data;

    case "ADD_TO_CART":
      const existingProduct = state.find(
        (element) => element.product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        return [...state];
      } else {
        const newProduct = { product: action.payload, quantity: 1 };
        return [...state, newProduct];
      }

    case "DECREASE_QUANTITY":
      const productIndex = state.findIndex(
        (item) => item.product.id === action.payload
      );

      if (productIndex !== -1) {
        const product = state[productIndex];

        if (product.quantity === 1) {
          const newList = [
            ...state.slice(0, productIndex),
            ...state.slice(productIndex + 1),
          ];
          return newList;
        } else {
          const newList = state.map((item, index) =>
            index === productIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          return newList;
        }
      }

      return state;

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
