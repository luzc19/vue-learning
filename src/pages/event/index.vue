<style scoped>
pre {
  line-height: 1.8;
  font-size: 16px;
} 
</style>
<template>
<div>
<pre>
vue组件事件触发
1、事件的触发遵循事件的冒泡机制
2、其中submit事件比较特别，会触发页面跳转刷新，监听测试需要注意 @submit.native.prevent
3、在自定义组件上监听相当于在该组件的根元素上监听，如果里面的事件不能冒泡，则无法监听到该事件
4、blur,focus,error,load,mouseenter,mouseleave,unload 不支持冒泡
</pre>


    <child @click.native="testClick" @keydown.native="testkeydown" @blur.native="handleBlur"></child>
    <el-form @submit.native.prevent="submit">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">立即创建</el-button>
        </el-form-item>
    </el-form>
    <el-autocomplete
      v-model="message"
      @keydown="show"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
</div>
</template>
<script type="text/javascript">
import child from './child'
export default {
    props:[],
    components:{
      child
    },
    data(){
        return {
            message:'',
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
        };
    },
    computed:{

    },
    methods:{
        submit() {
            console.log('submit')
        },
        testClick(arg){
            console.log('click in index')
        },
        testkeydown() {
            console.log('keydown in index')
        },
        show() {
            console.log('show something')
        },
        querySearch(str,cb) {
            cb( [
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
            ])
        },
        handleSelect(arg) {
            console.log(arg)
        },
        handleBlur() {
          console.log('blur in index')
        }
    },

}
</script>