<template>
  <el-form-item v-bind="attrs">
    <template v-for="(value, name) in $slots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </el-form-item>
</template>
<script lang="ts" setup>
import { useAttrs, onMounted } from 'vue'
import { ElFormItem } from "element-plus";

const attrs = useAttrs()

defineOptions({
  name: "SecFormItem"
});

onMounted(() => {
  // console.log("SecRadioGroup standard 1");
});
</script>
