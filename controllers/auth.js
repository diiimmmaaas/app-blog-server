import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Register user
export const register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const isUsed = await User.findOne({username});

        if (isUsed) {
            return res.json({
                message: "Данный username уже занят."
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
        });

        await newUser.save();

        res.json({
            newUser,
            message: "Регистрация прошла успешно",
        });

    } catch (error) {
        res.json({message: "Ошибка при создании пользователя"});
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if (!user) {
            return res.json({
                message: "Такого юзера не существует"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.json({
                message: "Неверный пароль"
            });
        }

        const token = jwt.sing(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d"
            }
        );

    } catch (error) {
        res.json({message: "Ошибка при авторизации"});
    }
};

// Get me
export const getMe = async (req, res) => {
    try {

    } catch (error) {

    }
};