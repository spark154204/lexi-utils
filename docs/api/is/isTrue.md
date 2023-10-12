### isTrue
- 参数是否为true/false

```ts
import { isTrue } from 'lexi-utils';
    isTrue(1)    //true
    isTrue('1')    //true
    isTrue({})    //true
    isTrue([])    //true
    isTrue(true)    //true
    isTrue(false)    //false
    isTrue(null)    //false
    isTrue(undefined)    //false
    isTrue('')    //false
    isTrue(0)    //false
    isTrue(NaN)    //false
```
