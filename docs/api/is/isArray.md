### isObject

- 判断传入的参数是否为数组

```ts
import {isObject} from 'lexi-utils'
    isArray([])         // true
    isArray({})         // false
    isArray(1)          // false
    isArray('')         // false
    isArray(null)       // false
    isArray(undefined)  // false
    isArray(true)       // false
    isArray(null)       // false
```
