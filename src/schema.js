import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from 'nexus'
import { Query, Mutation } from './query'
import { Models } from './nexusModels'

export const schema = makeSchema({
  types: [Query, Mutation, ...Models],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',

  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context'
      }
    ]
  }
})