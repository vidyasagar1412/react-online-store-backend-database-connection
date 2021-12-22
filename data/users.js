
import bcrypt from 'bcryptjs';

const users=[
    
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },

    {
        name:'sagar',
        email:'sagar123@gmail.com',
        password:bcrypt.hashSync('123456',10)
    },

    {
        name:'vamshi',
        email:'vamshi123@gmail.com',
        password:bcrypt.hashSync('123456',10)
    }
    ];

    
export default users;
