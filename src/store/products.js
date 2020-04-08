export default {
  state: { 
    products: [
    ]
  },
  getters: {
    products:(store) => store.products
    
  },
  actions: {
    loadAllProducts({commit}) {
      
      const getAllProducts = new Promise((resolve, reject) => {
        const products = [
          {
            image:"1.jpg",
            name:"T-shirt 1",
            price:"100",
            article:"T1",
            available: true
          },
          {
            image:"2.jpg",
            name:"T-shirt 2",
            price:"150",
            article:"T2",
            available: true
          },
          {
            image:"3.jpg",
            name:"T-shirt 3",
            price:"200",
            article:"T3",
            available: false
          },
          {
            image:"4.jpg",
            name:"T-shirt 4",
            price:"250",
            article:"T4",
            available: true
          },
          {
            image:"5.jpg",
            name:"T-shirt 5",
            price:"300",
            article:"T5",
            available: true
          },
          {
            image:"6.jpg",
            name:"T-shirt 6",
            price:"400",
            article:"T6",
            available: true
          }
        ]
        resolve(products);
      });
      Promise.all([getAllProducts])
        .then(products => commit('SET_PRODUCTS', products));
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  }
}