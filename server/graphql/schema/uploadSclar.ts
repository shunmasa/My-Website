import { GraphQLScalarType } from 'graphql';
export const UploadScalar = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  parseValue(value: any) {
    return value
  },
  serialize(value: any) {
    return value
  },
  parseLiteral(ast) {
    throw new Error('‘Upload’ scalar literal unsupported.')
  },
})
