<style scoped>
    
</style>
<template>
<div>
    <input type="text" name="" @blur="handleBlur">
</div>
</template>
<script type="text/javascript">
export default {
    props:[],
    components:{

    },
    data(){
        return {
        
        };
    },
    computed:{

    },
    methods:{
        // 无副作用，工具函数，不使用this.xx数据
        tool(arg){
            return arg;
        },
        // 调用工具，控制流程 方法
        handleBlur($event){
            console.log($event)
        },
    },

}
</script>