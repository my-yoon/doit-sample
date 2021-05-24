<template>
  <Subpage :patetit="'도서'">
    <div class="bookpage">
      <VueSlickCarousel class="subpageslider" v-bind="settings"  @init="handleInit"  ref="carousel">
  			<div class="rollimg" :class="{active:index==tabIndex}" v-for="(item, index) in Newbooks" :key="index"  @click="Clicklink(index)">
  				<span class="imgbox" ><img :src="item.imgurl" /></span>
  				<strong v-html="item.name"></strong>
  				<span class="textbox" v-html="item.subdec"></span>
  			</div>
  		</VueSlickCarousel>
      <component :is="componentslist[tabIndex]" ></component>
      
    </div>
  </Subpage>
</template>
<script>
import Subpage from "../layout/components/Subpage.vue"
import BookDetail1 from "../layout/components/BookDetail1.vue"
import BookDetail2 from "../layout/components/BookDetail2.vue"
export default {
  components:{
    Subpage,
    BookDetail1
  },
  data(){
    return{
      settings:{
        slidesToShow:8,
        arrows:true,
        dots:false,
        infinite:true,
        responsive:[
          {
            breakpoint:1023,
            settings:{
              slidesToShow:5,
            }
          },
          {
            breakpoint:767,
            settings:{
              slidesToShow:2,
            }
          }
        ]
      },
      Newbooks:[
        {imgurl:'/images/t01.jpg', name:'4도서명'},
        {imgurl:'/images/t03.jpg', name:'도서명'},
        {imgurl:'/images/t04.jpg', name:'도서명'},
        {imgurl:'/images/t05.jpg', name:'도서명'},
        {imgurl:'/images/t06.jpg', name:'도서명'},
        {imgurl:'/images/t07.jpg', name:'도서명'},
        {imgurl:'/images/t08.jpg', name:'도서명'},
        {imgurl:'/images/t01.jpg', name:'4도서명'},
        {imgurl:'/images/t03.jpg', name:'도서명'},
        {imgurl:'/images/t04.jpg', name:'도서명'},
        {imgurl:'/images/t05.jpg', name:'도서명'},
        {imgurl:'/images/t06.jpg', name:'도서명'},
        {imgurl:'/images/t07.jpg', name:'도서명'},
        {imgurl:'/images/t08.jpg', name:'도서명'}
      ],
      componentslist:[BookDetail1, BookDetail2],
      tabIndex:0
    }
  },
  methods:{
    Clicklink(tabIndex){
      if (!(this.$route.query.tabId == tabIndex)) {
        this.tabIndex = tabIndex
        return this.$router.push('/book?tabId='+tabIndex) 
      }
    },
    
    handleInit(){
      this.$nextTick(() => {
        this.$refs.carousel.goTo(this.tabIndex)
      })
    }
  },
  
  created() {
    if(typeof this.$route.query.tabId =='undefined'){
      this.tabIndex=0
    }else{
      this.tabIndex = Number(this.$route.query.tabId)
    }

  }
}
</script>