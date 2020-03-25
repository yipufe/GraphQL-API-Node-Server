import { idArg, queryType, stringArg, mutationField, mutationType } from 'nexus'

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

        t.list.field('Bottles', {
            type: 'Bottle',
            args: {
               searchString: stringArg({nullable: true}),
            },
            resolve: (parent, { searchString }, ctx) => {
                return ctx.prisma.bottle.findMany({
                    where: {
                        OR: [
                            {bottleType: {contains: searchString}},
                            {description: {contains: searchString}}
                        ],
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
                itemCode: stringArg({nullable: true}),
                bottleType: stringArg({nullable: true}),
                price: stringArg(),
                description: stringArg({nullable: true}),
                imageUrl: stringArg({nullable: true}),

            },
            resolve: (parent, {itemCode, bottleType, price, description, imageUrl}, ctx) => {
                return ctx.prisma.bottle.create({
                    data: {
                        itemCode: itemCode,
                        bottleType: bottleType,
                        price: 5,
                        description: description,
                        imageUrl: imageUrl
                    }
                })
                
            }
        })
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
  CreateBottle {
		itemCode: id
  }
}



*/