#!/usr/bin/env node

import {cp} from 'fs/promises';

await cp('/Users/daviddalbusco/projects/papyrs/papyrs/src/lib/themes', './src/lib/themes', {
  recursive: true
});
