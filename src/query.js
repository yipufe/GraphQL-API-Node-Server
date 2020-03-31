import { idArg, queryType, floatArg, stringArg, mutationField, mutationType } from 'nexus'

export const Query = queryType({
    definition(t) {
        t.field('Bottle', {
            type: 'Bottle',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.bottle.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        t.field('Bundle', {
            type: 'Bundle',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.bundle.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        t.list.field('Bottles', {
            type: 'Bottle',
            args: {
               searchString: stringArg({nullable: true}),
            },
            resolve: (parent, { searchString }, ctx) => {
                return ctx.prisma.bottle.findMany({
                    where: {
                        OR: [
                            {itemCode: {contains: searchString}},
                            {bottleType: {contains: searchString}},
                            {description: {contains: searchString}}
                        ],
                    },
                })
            }
        })

        t.list.field('BottlesByCode', {
            type: 'Bottle',
            args: {
               searchCode: stringArg({nullable: true}),
            },
            resolve: (parent, { searchCode }, ctx) => {
                return ctx.prisma.bottle.findMany({
                    where: {
                        itemCode: searchCode
                    },
                })
            }
        })


        //bundles
        t.list.field('Bundles', {
            type: 'Bundle',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.bundle.findMany()
            }
        })

    }
})


export const Mutation = mutationType({
    type: 'Mutation',
    definition(t) {
        t.field('CreateBottle', {
            type: 'Bottle',
            args: {
                itemCode: stringArg({required: true}),
                bottleType: stringArg({required: true}),
                price: floatArg({required: true}),
                description: stringArg({nullable: true}),
                imageUrl: stringArg({nullable: true}),

            },
            resolve: (parent, {itemCode, bottleType, price, description, imageUrl}, ctx) => {
                return ctx.prisma.bottle.create({
                    data: {
                        itemCode: itemCode,
                        bottleType: bottleType,
                        price: price,
                        description: description,
                        imageUrl: imageUrl
                    }
                })
                
            }
        })


        t.field('CreateBundle', {
            type: 'Bundle',
            args: {
                bundle: stringArg({required: true}),
                price: floatArg({required: true}),
                description: stringArg({nullable: true}),
                imageUrl: stringArg({nullable: true}),
            },
            resolve: (parent, {bundle, price, description, imageUrl}, ctx) => {
                return ctx.prisma.bundle.create({
                    data: {
                        bundle: bundle,
                        price: price,
                        description: description,
                        imageUrl: imageUrl
                    }
                })
                
            }
        })


        t.field('UpdateBottle', {
            type: 'Bottle',
            args: {
                id: idArg({required: true}),
                itemCode: stringArg(),
                bottleType: stringArg(),
                price: floatArg(),
                description: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, {id, itemCode, bottleType, price, description, imageUrl}, ctx) => {
                return ctx.prisma.bottle.update({
                    where: {
                        id: id
                    },
                    data: {
                        itemCode: itemCode,
                        bottleType: bottleType,
                        price: price,
                        description: description,
                        imageUrl: imageUrl
                    }
                })                
            }
        })

        t.field('UpdateBundle', {
            type: 'Bundle',
            args: {
                id: idArg({required: true}),
                bundle: stringArg(),
                price: floatArg(),
                description: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, {id, bundle, price, description, imageUrl}, ctx) => {
                return ctx.prisma.bundle.update({
                    where: {
                        id: id
                    },
                    data: {
                        bundle: bundle,
                        price: price,
                        description: description,
                        imageUrl: imageUrl
                    }
                })
            }
        })

        t.crud.deleteOneBottle();
        t.crud.deleteOneBundle();
    }
})


//Vue Apollo Query and Mutations

//MY QUERYS
/*

query getBottle {
	Bottle(id: "ck7nojju20000pwugv58v4ve7") {
    id
    bottleType
    price
  }
}

query allBottles {
  Bottles {
    id
    bottleType
  }
}

query filterBottles {
  Bottles(searchString: "water") {
    id
    bottleType
    price
    description
  }
}

query getBundles {
  Bundles {
    id
    bundle
    price
    description
    imageUrl
  }
}

mutation setBottle {
  CreateBottle(itemCode: "555", bottleType: "pop", price: 50, description: "no description", imageUrl: "None") {
	id
    itemCode
    bottleType
    price
    description
    imageUrl
  }
}

mutation updateBottle {
  UpdateBottle(id: "ck87kp9d40000d4ugm4x3r71c", price: 3.99) {
    itemCode
    bottleType
    price
    description
  }
}

mutation deleteBottle {
	deleteOneBottle(where: {
    id: "ck894xhyz0000j4ug905vbfkg"
  }) {
    id
    itemCode
    bottleType
    price
    description
  }
}



*/