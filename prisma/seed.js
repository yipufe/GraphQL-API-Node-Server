import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createBottle() {
    try {
        await prismaClient.bottle.create({
            data: {
                itemCode: '00500',
                bottleType: 'Water bottle',
                price: 1.00,
                description: 'A bottle with water in it',
                imageUrl: ''
            }
        })    
    } catch(err) {
        console.log(err)
    }
}

async function main() {
    try {
        await createBottle()
    } catch(err) {
        console.log(err)
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prismaClient.disconnect()
    })