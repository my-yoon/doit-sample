<template>
  <header>
    <div class="topmemu">
    	<div class="contentbox">
    		<div class="logo"><button><img src="/images/logo.png" alt="이지스퍼블리싱로고" /></button></div> 
    		<div class="system">
    			<button class="login">로그인</button>
    			<button class="member">회원가입</button>
    		</div>
    	</div>
    </div>
    <nav>
    	<div class="contentbox">
        <ul>
          <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)"><button v-html="item.menutext"></button></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data(){
    return{
      menulists: [
        {menutext:'도서소개', link:'/book'},
        {menutext:'자료실', link:'/reference'},
        {menutext:'동영상강의', link:'/movieclass'},
        {menutext:'교재샘플', link:'/classsample'},
        {menutext:'회사소개', link:'/company'}
      ]
    }
  },
  methods:{
    goToPage:function(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target)
      }
    }
  }
}
</script>