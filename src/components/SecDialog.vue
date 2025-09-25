<template>
  <el-dialog v-bind="$attrs" @open="handleOpen">
    <template v-for="(value, name) in $slots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";

defineOptions({
  name: "SecDialog"
});

// 自定义属性
const props = defineProps({
  // 内容最大高度
  bodyMaxHeight: {
    type: String,
    default: "10vh"
  },
});

const emit = defineEmits(["open"]);

const handleOpen = () => {
  const dialogBody = document.querySelector(".el-dialog__body") as HTMLElement | null;
  if (dialogBody) {
    dialogBody.style.maxHeight = props.bodyMaxHeight;
    dialogBody.style.overflowY = "auto";
  }
  emit("open");
};
</script>
