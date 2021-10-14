<template>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>
  <div style="margin:50px auto;">
    <QSelect :option="option" @searchOption="searchOption" @selectItem="selectItem"></QSelect>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QSelect from './lib/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    QSelect
  },
  setup:()=>{

    const option = [{name:'菜鸟1',value:'1111'},{name:'菜鸟2',value:'2222'},{name:'菜鸟1',value:'1111'},{name:'菜鸟2',value:'2222'},{name:'菜鸟1',value:'1111'},{name:'菜鸟2',value:'2222'},{name:'菜鸟1',value:'1111'},{name:'菜鸟2',value:'2222'},{name:'菜鸟1',value:'1111'},{name:'菜鸟2',value:'2222'}];
    const searchOption = (value)=>{
      console.log("输入框的值---",value);
    };
    const selectItem = (item)=>{
      console.log("选择的值---",item);
    };
    return {option,searchOption,selectItem}
  }
})
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
