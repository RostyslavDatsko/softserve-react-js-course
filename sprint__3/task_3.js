/* 
Implement the getAge() function to get user age. To find his age you need to call a getUser() async function 
that returns a user object in format {role: "somerole", id: 1}. 

To get the actual user info you need to call another async function getUserProfile(id),
which uses id returned from the previous function and returns user info as an object 

{name: "Petro", age: 15}. The getAge() must return the age of the user.
*/




const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    try {
        const user = await getUser();
        const userProfile = await getUserProfile(user.id);
        return userProfile.age;

    } catch (error) {
        return null;
    }
}