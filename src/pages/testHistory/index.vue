<style scoped>
.mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    left: 0;
    top: 0;
}
</style>
<template>
<div>
    <pre>
        测试 window.history
        在用hash模式时，该怎么添加路径，返回时怎么处理路径
        使用轮播图时，怎么用URL定位组件中的特定图片
    </pre>
    <div class="mask" v-show="maskVisible" @click="hideImg">
        <div style="background: #fff;margin: 30px;">
            弹窗的内容
        </div>
    </div>
    <button @click="showImg">放大图片</button>

</div>
</template>
<script type="text/javascript">
export default {
    props:[],
    components:{

    },
    data(){
        return {
            maskVisible: false,
        };
    },
    computed:{

    },
    created() {
        let vm = this;
        window.onpopstate = function(ev) {
            console.log(ev)
            vm.maskVisible = false;
        }
    },
    methods:{
        showImg(arg){
            this.maskVisible = true;
            window.history.pushState({
                message: 'prev normal'
            },'mask', '#/showImg')
        },
        hideImg(){
            // window.history.replaceState({
            //     message: 'prev normal'
            // },'mask', '#/showImg')
            // this.maskVisible = false;
            window.history.back();
        },
    },
    beforeDestroy() {
        window.onpopstate = null;
    }

}
</script>