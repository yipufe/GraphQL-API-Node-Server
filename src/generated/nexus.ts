/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Bottle: prisma.Bottle;
  Bundle: prisma.Bundle;
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Bottle: { // field return type
    bottleType: string; // String!
    createdAt: any; // DateTime!
    description: string; // String!
    id: string; // String!
    imageUrl: string; // String!
    itemCode: string; // String!
    price: number; // Float!
    updatedAt: any; // DateTime!
  }
  Bundle: { // field return type
    bundle: string; // String!
    createdAt: any; // DateTime!
    description: string; // String!
    id: string; // String!
    imageUrl: string; // String!
    price: number; // Float!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    CreateBottle: NexusGenRootTypes['Bottle']; // Bottle!
  }
  Query: { // field return type
    Bottle: NexusGenRootTypes['Bottle'] | null; // Bottle
    Bottles: NexusGenRootTypes['Bottle'][]; // [Bottle!]!
    Bundles: NexusGenRootTypes['Bundle'][]; // [Bundle!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    CreateBottle: { // args
      bottleType?: string | null; // String
      description?: string | null; // String
      imageUrl?: string | null; // String
      itemCode?: string | null; // String
      price?: string | null; // String
    }
  }
  Query: {
    Bottle: { // args
      id?: string | null; // ID
    }
    Bottles: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Bottle" | "Bundle" | "Mutation" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}