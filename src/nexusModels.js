import { objectType } from 'nexus'

const Bottle = objectType({
   name: 'Bottle',
   definition(t) {
       t.model.id()
       t.model.createdAt()
       t.model.updatedAt()
       t.model.itemCode()
       t.model.bottleType()
       t.model.price()
       t.model.description()
       t.model.imageUrl()

   }
})

export const Models = [
    Bottle
]