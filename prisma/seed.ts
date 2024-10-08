import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where : { email: 'devbafaqih@gmail.com' },
        update: {},
        create: {
            email: 'devbafaqih@gmail.com',
            firstName: 'Muhammad',
            lastName: 'Bafaqih',
            activated: true,
            roleUser: "V_ADMIN",
            password: '$2b$10$kq8HuyUhsYbL24iygg0Xfuf5VPV6pHPzagZBSwhN7c455TrNjdh3u',//Cakra123$
            login: 'admin',
        }
    });
}

main()
.catch((e) => {
    console.error(e)
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})