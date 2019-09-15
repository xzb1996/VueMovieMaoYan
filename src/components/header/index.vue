<template>
    <div class="header">
        <slot></slot>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: 1rem;
        background: #e54847;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top:0;
        z-index: 10;
    }
    

</style>