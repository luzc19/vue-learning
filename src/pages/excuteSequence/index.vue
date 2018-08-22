<style scoped>
pre {
    font-size: 16px;
    line-height: 1.6;
} 
</style>
<template>
<div>

{{message}}
<br>
{{messageAll}}
<br>
{{messageAll2}}
<br>
<button @click="change">change</button>
<pre>
vue 对值的联动改变执行顺序
vue实例的函数调用分几个栈
初始化时: beforeCreate -> watch里面的immediate -> created -> computed ->mounted -> nextTick ->以上过程中设定的异步任务
其实在vue中nextTick之前的一系列执行都是同步任务，由vue在初始化时顺序调用
运行时事件触发函数调用：
methods 及外部函数的当前同步任务栈 -> promise then -> watch 栈 -> computed 栈 -> nextTick ->  setTimeout
其实只是执行了一个函数，然后又去执行这个函数设定或触发的一系列异步任务。
该函数中 Object.defineProperty 触发的setter 属于同步执行
这里触发设定了watch computed nextTick 等任务到macro task
函数中直接设定的promise then 到 micro task ， setTimeout 到 macro task
特别的，如果同时修改了几个data里的属性，对应的watcher会按照书写的顺序执行，而不是触发的顺序
JS执行栈继续执行

JS 一个执行周期包含 2个任务栈，栈中每个任务执行过程中可以自由往2个栈添加任务。
所有micro task 执行完成才会到macro task 
macro task 执行完成一个就会到下一个周期，每个周期之后会先渲染一次界面，再继续执行JS
执行过程如：清空micro task -> 执行一个 macro task -> 清空micro task -> 执行一个 macro task

macro task: setImmediate, MessageChannel, postMessage, setTimeout(这个的优先级最后)
micro task: Promise.then, MutationObsever
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
            message:'hello liang!',
            message2: '',

            testWatch:'testWatch'
        };
    },
    computed:{
        messageAll2() {
            console.log('in computed2');
            return this.message2 + 'so pretty'
        },
        messageAll() {
            console.log('in computed');
            return this.message + 'smile'
        },
    },
    beforeCreate() {
        // console.log('beforeCreate')
    },
    mounted() {
        // console.log('mounted')
    },
    created() {
        // console.log('created')
        // this.$nextTick(()=>{
        //     console.log('nextTick')
        // })
        // Promise.resolve().then((res)=>{
        //     console.log('next then')
        // })

    },
    methods:{
        change() {
            this.message = 'hello liang!!!!';
            this.testWatch = 'watchtest'
            Promise.resolve().then((res)=>{
                console.log('promise done1')
                this.change2()           
            })
            this.$nextTick(()=>{
                console.log('in nextTick')
            })
            Promise.resolve().then((res)=>{
                console.log('promise done2')
            })
            setTimeout(()=>{
                console.log('in setTimeout')
            })
            Promise.resolve().then((res)=>{
                console.log('promise done3')
            })
            console.log('in function')
        },
        change2() {
            console.log('in change2')
            this.message2 = 'nice to meet you.';
        }
    },
    watch:{
        testWatch() {
            console.log('testWatch')
        },
        message(){
            console.log('in watch message')
        },
        message2() {
            console.log('in watch message2')
        },
        // testWatch:{
        //     immediate: true,
        //     handler: function (argument) {
        //         console.log('in immediate')
        //     }
        // }
    }

}
</script>