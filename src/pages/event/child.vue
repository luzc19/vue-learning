<style scoped>
    
</style>
<template>
<form>
    <testInput @keydown.native="testkeydown" @blur.native="showSomething" ></testInput>
    <testButton @click.native="testClick"></testButton>
</form>
</template>
<script type="text/javascript">
import testButton from './testButton';
import testInput from './testInput';

export default {
    props:[],
    components:{
        testButton,
        testInput,
    },
    data(){
        return {
        
        };
    },
    computed:{

    },
    methods:{
        testClick(arg){
            console.log('click in child')
        },
        testkeydown() {
            console.log('keydown in child')
        },
        showSomething() {
            console.log('blur')
        }
    },

}
</script>