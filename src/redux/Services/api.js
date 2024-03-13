const BASE_URL = 'http://54.190.192.105:9185/angel';

export const registerUser = async userData => {
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.status) {
      await loginUser(userData.email, userData.password);
    }
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email, password),
    });

    if (!response.ok) {
      console.log('Failed to login');
      throw new Error('Login failed');
    }
    const data = await response.json();
    // console.log('DATA.....', data);
    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
};

export const fetchStates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get_all_state`);
    const states = await response.json();
    console.log('States:', states);
    return states.result;
  } catch (err) {
    console.log('Error fetching states:', err);
    throw err;
  }
};
