import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import * as path from 'path';

const gqlTypesArray = loadFilesSync(
    path.join('src', 'graphql', 'models', '*.gql'),
);

export default mergeTypeDefs(gqlTypesArray);
