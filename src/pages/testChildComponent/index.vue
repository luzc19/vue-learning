<style scoped>
    
</style>
<template>
<div>
    <pre style="text-align: left;">
        测试绑定各种类型的数据后的响应
        其中原理有待理解
    </pre>
    {{arr}}<br>
    {{message}}<br>
    {{object}}<br>
    <button @click="click">change</button>
    <br>
    --------------
    <child :initData="object[0]" :tag="1"></child>
    <child :initData="arr" :tag="2"></child>
    <!-- <child :initData="[arr[0]]" :tag="3"></child> -->
    <!-- <child :initData="{a:2}" :tag="2"></child> -->
<!--     <child :initData="arr" :tag="3"></child>
    <child :initData="object" :tag="4"></child>
    <child :initData="arr2" :tag="5"></child> -->
</div>
</template>
<script type="text/javascript">
import child from './child';

export default {
    props:[],
    components:{
        child,
    },
    data(){
        return {
            message: 'aaa',
            arr:[1,2,3],
            object:{
                '0':'good',
                '1':'good22222222'
            },
            arr2:[4,5,6],


        };
    },
    computed:{

    },
    methods:{
        click() {
            let num = (Math.random()*100).toFixed();
            this.message = 'hello' + num;
            // this.arr = [3,2,3]
            // this.arr[0]= num;
            this.object[0]='hahahah' +num;
        }
    },
    watch:{

    }

}
</script>