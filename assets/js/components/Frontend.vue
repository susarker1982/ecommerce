<template>
   <!--div start-->
   <div>
        <Header />
        <router-view></router-view>
        <Footer />            
   </div>
   <!--div end-->
</template>
<script>
   // import Vue from 'vue';
    
    import Header from './Frontend/Header.vue';
    import Heroone from './Frontend/Heroone.vue';
    import Footer from './Frontend/Footer.vue';
    export default {
        name: "frontend",
        methods: {
           toggleContent() {
               $('.hero__categories ul').slideToggle(400);
           }
        },
        components : {
           Header,
           Heroone,
           Footer
        }
    }
</script>
<style scoped>
</style>