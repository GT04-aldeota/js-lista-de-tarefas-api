const { PrismaClient } = require("../generated/prisma");

const PRISMA = new PrismaClient();

module.exports = { PRISMA }