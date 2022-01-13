//import bcrypt from 'bcryptjs';
// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
//     verifyPassword(password) {
//         return password === this.password
//     }
// }



// export const users = [
//     new User('admin', 'admin'),
//     new User('anna', 'password123member'),
// ];


// export function find(id) {
//     return users.find(u => { return u.username === id });
// }

const user = (sequelize, DataTypes) => {
    const User = sequelize.define('v8user', {
        id: {
            //type: DataTypes.STRING.BINARY,
            type: DataTypes.UUIDV4,
            allowNull: false, //зпрещено NULL
            unique: true, //уникальное значение
            validate: {
                //толко заполненные
                notEmpty: true,
            },
        },
        name: {
            type: DataTypes.MVARCHAR,
            allowNull: false, //зпрещено NULL
        },
        descr: {
            type: DataTypes.MVARCHAR,
            allowNull: false, //зпрещено NULL
        },
        osname: {
            type: DataTypes.MVARCHAR,
        },
        // changed: {
        //     type: DATE,
        //     allowNull: false, //зпрещено NULL
        // },
        rolesid: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false, //зпрещено NULL
        },
        show: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //зпрещено NULL
        },
        data: {
            type: DataTypes.STRING.BINARY,
            allowNull: false, //зпрещено NULL
        },
        eauth: {
            type: DataTypes.BOOLEAN,
        },
        admrole: {
            type: DataTypes.BOOLEAN,
        },
        ussprh: {
            type: DataTypes.DECIMAL(10, 0),
        },
    }, {
        //сключаем поля createAt и updatedAt
        timestamps: true,
        // Отключаем `createdAt`
        createdAt: false,
        // Изменяем название `updatedAt`
        updatedAt: 'changed',
    });
    User.FindByName = async name => {
        let user = await User.findOne({
            where: { name: name },
        });

        return user;
    };
    User.FindByUUID = async uuid => {
        let user = await User.findOne({
            where: { id: uuid },
        });
        return user;
    };

    return User;
};

export default user;

