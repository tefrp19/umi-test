<script lang="ts" setup>
import { ref } from "vue"
import type { UploadInstance } from "element-plus"

const uploadRef = ref<UploadInstance>()
// 选择文件时被调用，将他赋值给fileUpload
const handleChange = (uploadFile, uploadFiles) => {
  console.log("uploadFile", uploadFile)
  tableData.value.push({
    ...uploadFile,
    id: Number(new Date()),
    secret: 0
  })
  // uploadRef.value = uploadFile
}
const submitUpload = () => {
  console.log(uploadRef.value?.submit())

  const formData = new FormData()
  // console.log(tableData)
  for (let i = 0; i < tableData.value.length; i++) {
    formData.append(`file${i}`, tableData.value[i].raw) // File对象
    formData.append(`file${i}Secret`, String(tableData.value[i].secret)) // 每个文件对应的密级
  }
  // console.log(formData.get("file0"))
}

interface TableData {
  id: number
  name: string
  secret: number
  raw: File // 文件流
}
const tableData = ref<TableData[]>([])
const options = [
  {
    value: 0,
    label: "等级0"
  },
  {
    value: 1,
    label: "等级1"
  },
  {
    value: 2,
    label: "等级2"
  },
  {
    value: 3,
    label: "等级3"
  },
  {
    value: 4,
    label: "等级4"
  }
]
</script>
<template>
  <div class="file-upload-container">
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="true"
      :auto-upload="false"
      :on-change="handleChange"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>
    </el-upload>
    <el-table :data="tableData" size="large" class="file-upload-table">
      <el-table-column type="selection" width="50" align="center" />
      <el-table-column prop="id" label="编号" align="center" />
      <el-table-column prop="name" label="文件名" align="center" />
      <el-table-column prop="level" label="密级" align="center">
        <template #default="scope">
          <el-select v-model="scope.row.secret" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="" label="状态" align="center">
        <template #default="scope">
          <div>暂定</div>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="ml-3" type="success" style="margin-top: 50px" @click="submitUpload"> 批量上传文件 </el-button>
  </div>
  >
</template>

<style scoped>
.file-upload-container {
  padding: 50px;
}
.file-upload-table {
  margin-top: 50px;
}
</style>
