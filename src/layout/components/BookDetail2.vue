<template>
  <section class="bookdetail">
    <h1 class="booktitle">
      Do it! 웹 사이트 따라 만들기1
      <span>HTML, CSS, 자바스크립트, jQuery, Ajax로 웹 퍼블리싱</span>
    </h1>
    <div class="book-info">
      <div class="imgview">
        <div class="imgbook"><img src="/images/t03.jpg" alt=""></div>
        <div class="bookbtns">
          <b-button variant="lightgray"><i class="bi bi-search" />책 미리보기</b-button>
          <b-button variant="lightgray"><i class="bi bi-hdd" />전자책</b-button>
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
    <div class="book-detailinfo">
      <div class="detailTap">
        <b-form-radio name="detail-tap" v-model="tapselect" value="introduce" button  button-variant="detailtap"><i class="bi bi-mic" /> 책소개</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="review" button  button-variant="detailtap"><i class="bi bi-chat-left-text" /> 출판사리뷰</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="order" button  button-variant="detailtap"><i class="bi bi-layout-text-sidebar-reverse" />목차</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="write" button  button-variant="detailtap"><i class="bi bi-journal-text" /> 저자소개</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="recommendation" button button-variant="detailtap"><i class="bi bi-person-check" />추천의글</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="reference" button button-variant="detailtap"><i class="bi bi-inboxes" />자료실</b-form-radio>
      </div>
      <template v-if="tapselect=='introduce'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개 합니다.</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='review'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>출판사 리뷰 입니다.</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='order'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>목차 입니다..</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='write'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>저자소개 입니다.</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='recommendation'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>자료실 입니다.</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='reference'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>자료실 입니다.</h1>
          <p>
            웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업방식 그대로<br />
            웹사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
            이 책 한권이면 웹 사이트 하나가 뚝딱 완성
          </p>
          <p>
              이런분께 권해 드려요
            - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
            - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
            - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
            - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
            - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
          </p>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name:"BookDetail1",
  data(){
    return{
      bookinfolists:[
        {label:"저 자", content:"김윤미"},
        {label:"발행일", content:"2019-12-05"},
        {label:"사 양", content:"312쪽 | 188*257mm"},
        {label:"I S B N", content:"979-11-6303-124-6 15000"},
        {label:"포맷/용량PDF", content:"PDF | 77MB"},
        {label:"정 가", content:"11,000 원"},
        {label:"상 태", content:"정상 판매중"},
			],
      tapselect:"introduce"
    }
  }
}
</script>