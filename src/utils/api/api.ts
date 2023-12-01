import axios from "axios";
import { useContexData } from "hooks/useContex";

const Uri = "https://expense-tracker-39a41-default-rtdb.firebaseio.com";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(Uri + "/categories.json");
    const categories = [];
    for (const key in data) {
      const categoriesObject = {
        id: key,
        name: data[key].name,
        src: data[key].src,
        subCategories: data[key].subCategories,
      };
      categories.push(categoriesObject);
    }
    return categories;
  } catch (error) {
    console.log("Get Categories", error);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(Uri + "/products.json");
    if (data) {
      const products = [];
      for (const key in data) {
        const productsObject = {
          firabase_id: key,
          id: data[key].id,
          name: data[key].name,
          images: data[key].images,
          fiyat: data[key].fiyat,
          fiyatIndirimli: data[key].fiyatIndirimli,
          image: data[key].image,
          miktar: data[key].miktar,
        };
        products.push(productsObject);
      }
      return products;
    } else {
      console.log("Null");
    }
  } catch (error) {
    console.log("Get Products", error);
  }
};

export const getCart = async () => {
  try {
    const { data } = await axios.get(Uri + "/cart.json");
    return data;
  } catch (error) {
    console.error("Get Cart", error);
    throw error;
  }
};

export const AddProductCart = async (item) => {
  try {
    const cartItems = await getCart();

    if (cartItems === null) {
      const newItem = {
        product: item,
        quantity: 1,
      };
      const res = await axios.post(`${Uri}/cart.json`, newItem);
    } else {
      const existingProduct = Object.keys(cartItems).find(
        (i) => cartItems[i].product.id == item.id
      );

      if (existingProduct) {
        const newItem = {
          product: item.product,
          quantity: cartItems[existingProduct].quantity + 1,
        };

        const res = await axios.patch(
          `${Uri}/cart/${existingProduct}.json`,
          newItem
        );
      } else {
        const newItem = {
          product: item,
          quantity: 1,
        };
        const res = await axios.post(`${Uri}/cart.json`, newItem);
      }
    }
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
  }
};

export const decreaseAmount = async (item) => {
  const cartItems = await getCart();

  for (const key in cartItems) {
    if (cartItems[key].product.id === item.id) {
      if (cartItems[key].quantity === 1) {
        const res = await axios.delete(`${Uri}/cart/${key}.json`);
      } else {
        const newItem = {
          product: item,
          quantity: cartItems[key].quantity - 1,
        };
        const res = await axios.patch(`${Uri}/cart/${key}.json`, newItem);
      }

      break;
    }
  }
};
