<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"xzb-BScroll",
    mounted(){
        new BScroll(this.$refs.wrapper,{
            tap:true,
            scrollX:true
        })
    }
}
</script>

<style>
     .wrapper{
        height: 100%;
    }
</style>