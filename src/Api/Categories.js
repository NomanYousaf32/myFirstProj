import axios from "axios";

const Category= axios.create({
    baseURL:"https://fakestoreapi.com/products"
})
export default Category;