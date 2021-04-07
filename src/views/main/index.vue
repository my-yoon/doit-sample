<template>
  <section class="maincontents">
  	<section class="mainbanner"><img src="/images/mainimg.png" /></section>
  	<section class="newbook">
  		<h1 class="maintit">
  			새로 나온 도서
  			<span>분야별로 새로 나온 도서를 만나보세요</span>
  		</h1>
      <div class="tap">
  			<b-button variant="tap active" @click="AddContents('it', $event)">IT전문서</b-button>
  			<b-button variant="tap" @click="AddContents('work', $event)">업무 능력, 기타</b-button>
  			<b-button variant="tap" @click="AddContents('photo', $event)">사진 예술</b-button>
  			<b-button variant="tap" @click="AddContents('science', $event)">데이터 과학</b-button>
  		</div>
      <VueSlickCarousel class="mainslider" v-bind="settings">
  			<div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
  				<span class="imgbox"><img :src="item.imgurl" /></span>
  				<strong v-html="item.name"></strong>
  				<span class="textbox" v-html="item.subdec"></span>
  			</div>
  		</VueSlickCarousel>
  	</section>
  	<section class="searchbook">
  		<h1 class="maintit">
  			도서검색
  			<span>찾고자하는 도서명을 검색해 주세요</span>
  		</h1>
  	</section>
  	<section class="bannermenu"></section>
  	<section class="notice">
  		<h1 class="maintit">공지사항</h1>
  	</section>
  </section>
</template>
<style>

</style>
<script>
export default {
  data(){
    return{
      Newbooks:[],
      Newbooks_it:[
        {imgurl:'/images/t01.jpg', name:'1도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
      ],
      Newbooks_work:[
        {imgurl:'/images/t01.jpg', name:'2도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
      ],
      Newbooks_photo:[
        {imgurl:'/images/t01.jpg', name:'3도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
      ],
      Newbooks_science:[
        {imgurl:'/images/t01.jpg', name:'4도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t03.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t04.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t05.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t06.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t07.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
        {imgurl:'/images/t08.jpg', name:'도서명' , subdec:'이 책의 전반부에서는 타입스크립트의 핵심 문법...' },
      ],
      settings:{
        slidesToShow:5,
        arrows:true,
        dots:false,
        infinite:true,
        responsive:[
          {
            breakpoint:767,
            settings:{
              slidesToShow:4,
            }
          },
          {
            breakpoint:414,
            settings:{
              slidesToShow:2,
            }
          }
        ]
      },
    }
  },
  methods:{
    AddContents(contents, event){
      console.log(event)
      event.target.classList.add('active')
      if(contents == 'it'){
        this.Newbooks =this.Newbooks_it
      }else if(contents == 'work'){
        this.Newbooks =this.Newbooks_work
      }else if(contents == 'photo'){
        this.Newbooks =this.Newbooks_photo
      }else if(contents == 'science'){
        this.Newbooks =this.Newbooks_science
      }
    }
  },
  created(){
    this.Newbooks = this.Newbooks_it
  }
}
</script>