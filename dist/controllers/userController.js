"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// GET /users
router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json({ users });
});
// GET /users/:id
router.get("/:id", async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params?.id) },
    });
    res.json({ user });
});
// POST /users
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: { name, email },
    });
    res.json({ user });
});
// PUT /users/:id
router.put("/:id", async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.update({
        where: { id: parseInt(req.params?.id) },
        data: { name, email },
    });
    res.json({ user });
});
// DELETE /users/:id
router.delete("/:id", async (req, res) => {
    const user = await prisma.user.delete({
        where: { id: parseInt(req.params?.id) },
    });
    res.json({ user });
});
exports.default = router;
