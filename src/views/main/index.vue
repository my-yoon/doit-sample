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
      <div class="inputarea">
        <b-form-input v-model="seacherkeyword" ></b-form-input>
        <b-button variant="search"><i class="bi bi-search"></i></b-button>
        <div class="autolayer" :class="{none:autocomplate.length == 0}" v-if="seacherkeyword.length >0">
          <ul v-if="autocomplate.length > 0">
        		<li v-for="(item, index) in autocomplate[0].books" :key="index" v-html="item.booktit"></li>
        	</ul>
          <div class="nonemessage" v-else>
            <i class="bi bi-x-circle-fill"></i>
            검색 결과가 없습니다.
          </div>
        </div>
      </div>
      <div class="guidehash">
        <span v-for="(item,index) in hashdata" :key="index" v-html="item.text"></span>
      </div>
  	</section>
  	<section class="bannermenu">
      <div class="itembox" v-for="(item, index) in mainbanner" :key="index"  @click="gotopage(item.url)">
        <span v-html="item.stitle"></span>
        <strong v-html="item.maintitle"></strong>
        <i class="bi" :class="item.iconname"></i>
      </div>
    </section>
    <section class="notice">        
		<div class="noticebox">            
			<h1 class="maintit">공지사항</h1>            
			<b-button variant="noticemore" @click="viewmore($event)" />            
			<div class="newsitem" v-for="(item, index) in noticelists" :key="index"><strong v-html="item.noticetit"></strong><span v-html="item.date"></span></div>        
		</div>    
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
      hashdata:[
        {text:"html", value:"html"},
        {text:"vue", value:"vue"},
        {text:"css", value:"css"},
        {text:"javascript", value:"javascript"},
        {text:"자료구조/알고리즘", value:"자료구조/알고리즘"},
        {text:"파이썬", value:"파이썬"},
      ],
      booksname:[
        {cata:"html" , books:[
          {booktit:"웹사이트 따라 만들기" ,author:"김윤미"},
          {booktit:"html정석" ,author:"고경희"},
          {booktit:"html정석" ,author:"고경희"},
          {booktit:"웹사이트 따라 만들기" ,author:"김윤미"}
        ]},
        {cata:"vue" , books:[
          {booktit:"vue.js" ,author:"캡틴판교"},
          {booktit:"vue1" ,author:"고경희"},
          {booktit:"vue2" ,author:"고경희"},
          {booktit:"vue3" ,author:"김윤미"},
          {booktit:"vue3" ,author:"김윤미"}
        ]},
        {cata:"javascript" , books:[
          {booktit:"1vue.js" ,author:"캡틴판교"},
          {booktit:"2vue1" ,author:"고경희"},
          {booktit:"3vue2" ,author:"고경희"},
          {booktit:"4vue3" ,author:"김윤미"}
        ]}
      ],
      mainbanner:[
  			{stitle:'대학교수,교육기관 강사전용', maintitle:'교재샘플/강의자료', iconname:'bi-stickies', url:'/classsample'},
  			{stitle:'스터디카페', maintitle:'DO IT! 스터디룸', iconname:'bi-book-half', url:'https://cafe.naver.com/doitstudyroom'},
  			{stitle:'이지스의 sns', maintitle:'DO IT! 페이스 북', iconname:'bi-facebook', url:'https://www.facebook.com/easyspub/'},
  		],
      seacherkeyword:'',
      noticelists:[            	
				{noticetit:"이지스퍼블리싱/이지스에듀 저작물 이용 가이드라인", date:"2021-03-30"},            
				{noticetit:"[서평단 모집] Do it! 오토캐드 2021", date:"2020.06.04"},            
				{noticetit:"IT 분야 기획편집자 신입⦁경력직 모집중(~6/24(수요일)까지)", date:"2020.06.03"},        
			] 
    }
  },
  methods:{
    AddContents(contents, event){
      document.querySelector(".active").classList.remove('active')
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
    },
    gotopage(url){
      if(url=='/classsample'){
  	  	this.$router.push(url)
  	  }else{
  	  	window.open(url, '_blank')
  	  }
    },
    viewmore(event){
      if(event.target.parentElement.classList.contains("full") == false){
        event.target.parentElement.classList.add("full")
      }else{
        event.target.parentElement.classList.remove("full")
      }
			
		}
  },
  created(){
    this.Newbooks = this.Newbooks_it
  },
  computed:{
  	autocomplate(){
      const resultlists= this.booksname.filter((item) => {
        if(item.cata.match(this.seacherkeyword))
          return item;
      });
      return resultlists
  	}
  }
}
</script>
