<template>
    <ul>
        <li><span>getRandomStr</span> <span>{{ getRandomStr() }}</span></li>
    </ul>
</template>

<script setup lang="ts">
import { getRandomStr,getUrlParamsByKey,removeAllSpace } from 'lexi-utils';
const getUrlParamsByKeyRes= getUrlParamsByKey('?a=1&b=2&c=3','?');
console.log('getUrlParamsByKeyRes',getUrlParamsByKeyRes);

console.log(removeAllSpace('a b c d e f g h i j k l m n o p q r s t u v w x y z'));



</script>
