import {blockContentType} from './blockContentType';
import {categoryType} from './categoryType';
import {authorType} from './authorType';
import { articleType, projectType, toolType } from './allType';

export const schema = {
  types: [blockContentType, categoryType, projectType, authorType, toolType, articleType],
}
