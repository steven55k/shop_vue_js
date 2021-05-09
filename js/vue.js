// jeu d'essai 
const products = [
    {id: 1, name: 'T-Shirt Fila', price: 29.90, img: 'img/fila.jpeg'},
    {id: 2, name: 'T-Shirt Adidas', price: 35, img: 'img/adidas.jpeg'},
    {id: 3, name: 'T-Shirt Balmain', price: 175, img: 'img/balmain.jpeg'},
    {id: 4, name: 'T-Shirt Gucci', price: 235, img: 'img/gucci.jpeg'},
    {id: 5, name: 'T-Shirt Jack&Jones', price: 35, img: 'img/jack&jones.jpeg'},
    {id: 6, name: 'T-Shirt Lacoste', price: 45.95, img: 'img/lacoste.jpeg'},
    {id: 7, name: 'T-Shirt Mona Lisa', price: 18.90, img: 'img/monaLisa.jpeg'},
    {id: 8, name: 'T-Shirt Nike', price: 34.95, img: 'img/nike.jpeg'},
    {id: 9, name: 'T-Shirt Paulo Ralph', price: 75, img: 'img/pauloRalph.jpeg'},
    {id: 10, name: 'T-Shirt Porshe Legacy', price: 90, img: 'img/porcheLegacy.jpeg'},
    {id: 11, name: 'T-Shirt Puma', price: 24.90, img: 'img/puma.jpeg'},
    {id: 12, name: 'T-Shirt Vans', price: 35.95, img: 'img/vans.jpeg'}
]; 

const home = {
    template: "#home",
    name: "Home", 
    data: () => {
        return {
            products,
            searchKey: '',
            cart: []
        }
    },
    computed: {
        filteredList(){
            return this.products.filter((product) => {
                return product.name.toLowerCase().includes(this.searchKey.toLowerCase());
              })
        },
        cartTotalAmount(){
            let total = 0;
            for (let item in this.cart){
              total = total + (this.cart[item].quantity * this.cart[item].price)
            }
            return total;
          }
    },
    methods: {
        addToCart(product){
            for (let i = 0; i < this.cart.length; i++){
                if (this.cart[i].id === product.id) {
                  return this.cart[i].quantity++
                }
              }
              this.cart.push({
                id: product.id,
                img: product.img,
                name: product.name,
                price: product.price,
                quantity: 1
              })
        },
        cartRemoveProduct(id){
            this.$delete(this.cart, id);
        },
        quantityMinusOne(product, id){
            if(product.quantity == 0){
                this.cartRemoveProduct(id);
            }else{
                product.quantity -= 1;
            }
        }
    }
}

// router
const router = new VueRouter({
    routes: [
        {path: '/', component: home, name: 'Home'}
    ]
})

const vue = new Vue({
    router
}).$mount('#app');


