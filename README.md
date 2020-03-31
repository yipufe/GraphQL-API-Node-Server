# GraphQL API Server

## Setup
This setup assumes you already and a current version of Nodejs and npm installed on your machine.

### Clone Repository

Clone this repository:
git init
git clone https://github.com/yipufe/GraphQL-API-Node-Server.git

### Install dependancies

```npm install```

### Run setup scripts

Run the following in this order

```
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
```

### Start server

```npm run start```

## Queries and Mutations

The server will be running on localhost:4000

### Queries


#### Get a Bottle
You will need to change the id being used depending on what is in your database

```
query getBottle {
	Bottle(id: "ck7nojju20000pwugv58v4ve7") {
    id
    bottleType
    price
  }
}
```

#### Get all Bottles
This query returns all Bottles in the database

```
query allBottles {
  Bottles {
    id
    bottleType
    price
    description
    imageUrl
  }
}
```

You can also search what is returned by passing in a searchString into the query as follows

```
query filterBottles {
  Bottles(searchString: "water") {
    id
    bottleType
    price
    description
  }
}
```


#### Get all Bundles
This query returns all Bundles

```
query getBundles {
  Bundles {
    id
    bundle
    price
    description
    imageUrl
  }
}
```

#### Get Bundle by id
This query gets a Bundle by a specified id

```
query getBundle {
  Bundle(id: "ck8f62gu30029anau2ujhjjyd") {
    id
    bundle
    price
    description
  }
}
```


### Mutations

#### Create Bottle
The following will create a Bottle
```
mutation setBottle {
  CreateBottle(itemCode: "555", bottleType: "pop", price: 3.99, description: "some description", imageUrl: "https://somecool.image.com/someimage.jpg") {
	  id
    itemCode
    bottleType
    price
    description
    imageUrl
  }
}
```

#### Create Bundle
The following will create a Bundle.
Use the bundle parameter to string together the Bottle itemCodes as a comma seperated list.

```
mutation setBundle {
  CreateBundle(bundle: "00105,00106,00107,00109", price: 119.99, description: "A random set of bottles", imageUrl: "https://somerandom.bottle.img/bottles.jpg") {
    id
    bundle
    price
    description
    imageUrl
  }
}
```

#### Update Bottle
This will update a Bottle price with a given id

```
mutation updateBottle {
  UpdateBottle(id: "ck8g8pwre0000fhauhv99osjg", price: 5.99) {
    itemCode
    bottleType
    price
    description
  }
}
```

#### Update Bundle
This will update a Bundle price were the Bundle id and price and provided

```
mutation updateBundle {
  UpdateBundle(id: "ck8geb4xg00005rauis4wejpv", price: 149.99) {
    id
    bundle
    price
    description
    imageUrl
    updatedAt
  }
}
```

#### Delete Bottle
This will delete a Bottle with a given id

```
mutation deleteBottle {
	deleteOneBottle(where: {
    id: "ck8g8pwre0000fhauhv99osjg"
  }) {
    id
    itemCode
    bottleType
    price
    description
  }
}
```

#### Delete Bundle
This will delete a Bundle with a given id

```
mutation deleteBundle {
  deleteOneBundle(where: {
    id: "ck8geb4xg00005rauis4wejpv"
  }) {
    id
    bundle
    price
    description
  }
}
```