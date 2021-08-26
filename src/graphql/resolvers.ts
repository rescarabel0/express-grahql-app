import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import * as path from 'path';

const gqlResolversArray = loadFilesSync(
    path.join(__dirname, '..', 'components', '**', '*.resolver.js'),
);

console.log(gqlResolversArray);

export default mergeResolvers(gqlResolversArray);
