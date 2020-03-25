import { PrismaClient } from '@prisma/client'
import { BottleSeedData, BundleSeedData } from './seedData'

const prismaClient = new PrismaClient()

async function createBottle(itemCode, bottleType, price, description, imageUrl) {
    try {
        await prismaClient.bottle.create({
            data: {
                itemCode: itemCode,
                bottleType: bottleType,
                price: price,
                description: description,
                imageUrl: imageUrl
            }
        })    
    } catch(err) {
        console.log(err)
    }
}

async function createBundle(bundle, price, description, imageUrl) {
    try {
        await prismaClient.bundle.create({
            data: {
                bundle: bundle,
                price: price,
                description: description,
                imageUrl: imageUrl
            }
        })
    } catch(err) {
        console.log(err)
    }
}

async function main() {
    for(let i=0;i<BottleSeedData.length;i++) {
        let bottleItem = BottleSeedData[i];
        try {
            await createBottle(bottleItem.itemCode, bottleItem.bottleType, bottleItem.price, bottleItem.description, bottleItem.imageUrl)
        } catch(err) {
            console.log(err)
        }
    }

    for(let i=0;i<BundleSeedData.length;i++) {
        let bundleItem = BundleSeedData[i];
        try {
            await createBundle(bundleItem.bundle ,bundleItem.price, bundleItem.description, bundleItem.imageUrl)
        } catch(err) {
            console.log(err)
        }
    }

}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prismaClient.disconnect()
    })