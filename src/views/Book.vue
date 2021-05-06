<template>
  <Subpage :patetit="'도서'">
    <div class="bookpage">
      <VueSlickCarousel class="subpageslider" v-bind="settings">
  			<div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
  				<span class="imgbox"><img :src="item.imgurl" /></span>
  				<strong v-html="item.name"></strong>
  				<span class="textbox" v-html="item.subdec"></span>
  			</div>
  		</VueSlickCarousel>
      <section class="bookdetail">
        <h1 class="booktitle">
          Do it! 웹 사이트 따라 만들기
          <span>HTML, CSS, 자바스크립트, jQuery, Ajax로 웹 퍼블리싱</span>
        </h1>
        <div class="book-info">
          <div class="imgview">
            <div class="imgbook"><img src="/images/t03.jpg" alt=""></div>
            <div class="bookbtns">
              <b-button variant="lightgray">책 미리보기</b-button>
              <b-button variant="lightgray">전자책</b-button>
            </div>
          </div>
          <div class="infolist">
            <ul>
              <li v-for="(item, index) in bookinfolists" :key="index">
                <span class="label" v-html="item.label"></span>
                <span class="infocontent" v-html="item.content"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Subpage>
</template>
<script>
import Subpage from "../layout/components/Subpage.vue"
export default {
  components:{
    Subpage
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
      bookinfolists:[
        {label:"저 자", content:"김윤미"},
        {label:"발행일", content:"2019-12-05"},
        {label:"사 양", content:"312쪽 | 188*257mm"},
        {label:"I S B N", content:"979-11-6303-124-6 15000"},
        {label:"포맷/용량PDF", content:"PDF | 77MB"},
        {label:"정 가", content:"11,000 원"},
        {label:"상 태", content:"정상 판매중"},
			]
    }
  }
}
</script>
