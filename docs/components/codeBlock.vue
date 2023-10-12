<template>
    <div>
        <ul>
            <li>运行代码</li>
        </ul>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<script setup lang="ts">
import { useSlots } from 'vue';
const slogs =  useSlots();
console.log('slots', slogs);
// 获取code标签


</script>