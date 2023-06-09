<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'
import { fetchSession } from '@/api'

async function getQrCode() {
  const data = await fetchSession()
  console.log(data)
  return data
}

onMounted(() => {
  console.log(2, getQrCode())
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <div>
    <h1>微信登录</h1>
    <div class="qr-code">
      <div id="qrcode" />
    </div>
    <div class="tip">
      请使用微信扫描二维码登录<br>"闪电AI工具箱"
    </div>
  </div>
</template>

<style>
body {
  background-color: #333;
  text-align: center;
  padding-top: 100px;
}

h1 {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}

.qr-code {
  display: inline-block;
  background-color: #fff;
  padding: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.tip {
  font-size: 14px;
  color: #fff;
  background-color: #232323;
  width: 270px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  border-radius: 40px;
}
</style>
