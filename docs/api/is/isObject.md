### isObject
- 判断传入的是否是对象

```ts
import {isObject} from 'lexi-utils'
    isObject({})//true
    isObject([])//false
    isObject(1)//false
    isObject('')//false
    isObject(null)//false
    isObject(undefined)//false
    isObject(true)//false
    isObject(null)//false
```
