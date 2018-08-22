<style scoped>
    
</style>
<template>
<div>
    {{initData}}
    <!-- <button @click="compare">比较</button> -->

</div>
</template>
<script type="text/javascript">
export default {
    props:['initData','tag'],
    components:{

    },
    data(){
        return {
        
        };
    },
    computed:{

    },
    methods:{
        compare() {

            // this.initData[0] = 'child'
        }
    },
    watch:{
        initData:{
            handler: function (val, oldVal) {
                console.log('init data change' + '--' + this.tag)
                
            },
            deep: true
        },
        // initData() {
        //     console.log('init data change')
        // }
    }

}
</script>