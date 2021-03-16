<template>
  <section id="wrap">
    <h1 class="blind">이지스퍼블리싱 홈페이지</h1>
    <Header />
    <Container />
    <Footer />
  </section>
</template>
<script>
import Container from "./components/Container.vue"
import Header from "./components/Header.vue"
import Footer  from "./components/Footer.vue"
export default {
  components:{
    Container,
    Header,
    Footer
  }
}
</script>