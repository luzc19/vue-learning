<style scoped>
.input-block {
    border: 1px solid #f00;
    min-height: 100px;
}
</style>

<template>
<div>
    <div class="input-block" @paste="handlePaste">
        请粘贴图片到此出
        <img :src="imgUrl">
    </div>
    <pre>
        测试paste事件
        event.clipboardData
        使用URL.createObjectURL展示粘贴的图片
    </pre>
</div>
</template>

<script type="text/javascript">

export default {
    props:[],
    components:{
        
    },
    data(){
        return {
            imgUrl:'',
        };
    },
    computed:{

    },
    methods:{
        handlePaste(event){
            console.log(event.clipboardData.items);
            let items = event.clipboardData.items
            let imgs = [];
            for (var i = 0; i < items.length; i++) {
                if(items[i].kind=='file'){
                    imgs.push(items[i].getAsFile())
                }
            }
            this.imgUrl = URL.createObjectURL(imgs[0]);
        }
    },

}
</script>