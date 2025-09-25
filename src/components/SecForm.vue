<template>
  <el-form ref="formRef" v-bind="attrs">
    <template v-for="(value, name) in $slots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </el-form>
</template>
<script lang="ts" setup>
import { useAttrs, onMounted, ref } from 'vue'
import { ElForm } from "element-plus";
import type { FormInstance } from 'element-plus'

const attrs = useAttrs()

defineOptions({
  name: "SecForm"
});

const formRef = ref<FormInstance>()
// 向父组件暴露方法
defineExpose({
  validate: () => formRef.value?.validate(),
  validateField: () => formRef.value?.validateField(),
  resetFields: () => formRef.value?.resetFields(),
  clearValidate: () => formRef.value?.clearValidate(),
})

onMounted(() => {
  // console.log("SecRadioGroup standard 1");
});
</script>
