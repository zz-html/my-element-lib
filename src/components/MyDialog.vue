<template>
  <el-dialog v-model="visible" :title="title" width="500px">
    <slot />
    <template #footer>
      <el-button @click="handleCancel">取消1</el-button>
      <el-button type="primary" @click="handleOk">确认2</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { ElButton, ElDialog } from 'element-plus'

defineOptions({ name: "MyDialog" })

const props = defineProps<{
  title: string
  modelValue: boolean
}>()

const emits = defineEmits<{
  (e: "update:modelValue", val: boolean): void
  (e: "ok"): void
  (e: "cancel"): void
}>()

const visible = ref(props.modelValue)

watch(() => props.modelValue, v => (visible.value = v))

const handleOk = () => {
  emits("ok")
  emits("update:modelValue", false)
}
const handleCancel = () => {
  emits("cancel")
  emits("update:modelValue", false)
}
</script>
