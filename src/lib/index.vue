<template>
  <div class="q-select">
    <div class="q-select-container" @click="openOption">
      <div class="q-select-value">
        <div v-if="false" class="value-text placeholder">请选择下单时间</div>
        <input v-if="true" class="value-input" @input="searchOption" placeholder="请选择下单时间" type="text"/>
      </div>
      <div class="q-select-icon">
        <img class="icon-img" src="../assets/logo.png" alt="down"/>
      </div>
    </div>
  </div>
  <div v-if="optionShow" class="q-select-model" @click="closeOption"></div>
  <div v-if="optionShow" class="option-container">
    <div class="option-header">
      <div>取消</div>
      <div>请选择时间</div>
      <div>确认</div>
    </div>
    <div class="option-content">
      <div v-for="(item,index) in option" class="option-item" @click="selectItem(item)" :key="index" :value="item.value">{{item.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'q-select',
    emits: ['searchOption','selectItem'],
    props: {
      option: {
        type: Array,
        required: true,
      }
    },
    /**
     * 1.选中高亮item
     * 2.在框中显示选中的值
     * 3.监听当前option的滚动条 进行分页加载数据
     * 4.展示option时的动画
     */
    setup: (props,{emit}) => {
      const count = ref(0);
      const optionShow = ref(false);
      const openOption = ()=> {
        optionShow.value = true
      };
      const closeOption = ()=> {
        optionShow.value = false
      };
      const searchOption = (value)=> {
        emit('searchOption',value.target.value)
      };
      const selectItem = (item)=>{
        emit('selectItem',item);
        closeOption();
      };
      return { count,openOption,optionShow ,closeOption,searchOption,props,selectItem}
    }
  })
</script>

<style scoped lang="scss">
  .q-select{
    .q-select-container{
      border: 1px solid #eee;
      border-radius:6px;
      height:38px;
      display:flex;
      overflow: hidden;
      align-items:center;
      .q-select-value{
        margin: 0 10px;
        flex: 1;
        .value-text{
          cursor: pointer;
          width:100%;
          text-align: left;
          color: #666;
          font-size:14px;
          &.placeholder{
            color: #bbb;
          }
        }
        .value-input{
          width:100%;
          height:38px;
          outline: none;
          border:none;
          color: #666;
        }
      }
      .q-select-icon{
        cursor: pointer;
        width:30px;
        display:flex;
        align-items:center;
        justify-content: center;
        .icon-img{
          width:14px;
          height:8px;
        }
      }
    }
  }
  .option-container{
    position:fixed;
    background-color:#fff;
    bottom:0;
    z-index:9999;
    width:calc(100% - 20px);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 5px 2px #eee;
    padding:5px 10px;
    .option-header{
      height:30px;
      background-color:red;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .option-content{
      height:200px;
      overflow-y: scroll;
      padding:0 10px;
      .option-item{
        font-size:14px;
        line-height:35px;
        border-bottom: 1px solid #eee;
        &:last-child{
          border:none;
        }
      }
    }
  }
  .q-select-model{
    z-index:9998;
    position:fixed;
    bottom:0;
    top:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.4);

  }
</style>
