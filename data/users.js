import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'bintayusuf55@gmail.com',
        password: bcrypt.hashSync('Pa55word', 10),
        isAdmin: true
    }
]