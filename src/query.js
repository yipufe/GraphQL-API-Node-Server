import { idArg, queryType, stringArg } from 'nexus'

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

        // t.list.field('Bottles', {
        //     type: 'Bottle',
        //     resolve: (parent, args, ctx) => {
        //         return ctx.prisma.bottle.findMany()
        //     }
        // })

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



*/