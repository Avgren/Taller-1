"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.sortUserByCreatedAt = sortUserByCreatedAt;
exports.user = [
    {
        id: 1,
        name: "nelson",
        email: "nelson@gmail.com",
        password: "123456",
        isActive: true,
        createdAt: new Date("03/25/2025"),
        updatedAt: new Date("20/04?2025"),
    },
    {
        id: 2,
        name: "ana",
        email: "ana@hotmail.com",
        password: "123456",
        isActive: true,
        createdAt: new Date("10/28/2022"),
        updatedAt: new Date("04/24/2025"),
    },
    {
        id: 3,
        name: "angel",
        email: "angel@gmail.com",
        password: "1234356",
        isActive: false,
        createdAt: new Date("02/10/2021"),
        updatedAt: new Date("08/27/2025"),
    },
    {
        id: 4,
        name: "carlos",
        email: "carlos@hotmail.com",
        password: "234567",
        isActive: false,
        createdAt: new Date("09/05/2024"),
        updatedAt: new Date("01/12/2025"),
    },
];
function sortUserByCreatedAt(user) {
    return user.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
    });
}
