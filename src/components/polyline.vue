<template>
  <div>
    <baidu-map class="map" :center="{ lng: 116.404,lat: 39.915 }" :zoom="14" @mousemove="syncPolyline"
      @click="paintPolyline" @rightclick="newPolyline">
      <bm-control>
        <button @click.stop="toggle">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>
      </bm-control>
      <bm-polyline :path="path" v-for="path of polyline.paths" :key="path"></bm-polyline>
    </baidu-map>
  </div>
</template>


<script setup>
import { ref,toRef } from 'vue';
import { getConfig } from 'c';

const config = getConfig();


</script>

<style></style>
