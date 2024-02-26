import database from '@react-native-firebase/database';

export const handleDatabase = () => {
  addUserData();
};

const addUserData = () => {
  const user = {
    title: 'Project',
    name: 'Rahul',
    // age: 22,
    email: 'rp1@gmail.com',
  };

  const addUser = database()
    .ref('/users/data')
    .once('value')
    .push()
    .then(
      () => {
        console.log('User added successfully');
        // getUserData();
      },
      err => {
        console.log('Error adding user to DB:' + err);
      },
    )
    .catch(err => {
      console.log('Error adding users:' + err);
    });

  addUser.set({
    age: 22,
    contact: 91,
  });
};
