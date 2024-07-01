import axios from 'axios';
const baseUrl = 'http://localhost:3004';
// const baseUrl = 'https://us-central1-alpha-shop-api.cloudfunctions.net/api';
export const fetchFavorites = async (currentMember, setFavorites, setFavoriteProducts) => {
    try {
        // 獲取用戶的 favorites
        const userResponse = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
        if (userResponse.data.length > 0) {
            const savedFavorites = userResponse.data[0].favorites || [];
            setFavorites(savedFavorites);
            
            // 獲取所有產品並過濾出 favorites
            const productsResponse = await axios.get(`${baseUrl}/products`);
            const newFavoriteProducts = productsResponse.data.filter(product => savedFavorites.includes(product.id));
            setFavoriteProducts(newFavoriteProducts);
        } else {
            console.error("User not found");
        }
      
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
}

export const updateFavorites = async (currentMember, updatedFavorites, setFavoriteProducts, favoriteProducts)=>{
    try {
        const userRes = await axios.get(`${baseUrl}/users?username=${currentMember.name}`);
        if (userRes.data.length > 0) {
            const userId = userRes.data[0].id;
            const res = await axios.patch(`${baseUrl}/users/${userId}`, { favorites: updatedFavorites });
        if (res.status === 200) {
            const updatedFavoriteProducts = favoriteProducts.filter(product => updatedFavorites.includes(product.id));
            setFavoriteProducts(updatedFavoriteProducts);
        }
    }
    } catch(error) {
        console.error("There was an error updating the favorites!", error)
    };
}