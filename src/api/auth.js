import axios from 'axios';
const authUrl = ' https://todo-list.alphacamp.io/api/auth';
const baseUrl = 'http://localhost:3004';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authUrl}/login`, {
      username,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      // 若登入成功，帶上success: true
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error(`Login failed:`, error);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authUrl}/register`, {
      username,
      email,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error(`Register failed:`, error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authUrl}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('Check permission failed:', error);
  }
};

export const saveUser = async (username) =>{
  try {
    // 檢查用戶是否已存在
    const userResponse = await axios.get(`${baseUrl}/users/?username=${username}`);
    if (userResponse.data.length > 0) { // 用戶已存在
      return;
    } else {
      // 用戶不存在，創建新的用戶信息
      await axios.post(`${baseUrl}/users`, { username, favorites: [] });
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // 用戶不存在，創建新的用戶信息
      await axios.post(`${baseUrl}/users`, { username, favorites: [] });
    } else {
      console.error("There was an error updating or creating the user data!", error);
    }
  }
}