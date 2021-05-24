<template>
  <header :class="Topclass">
    <div class="topmemu">
    	<div class="contentbox">
    		<div class="logo"><button v-on:click="goToPage('/main')"><img src="/images/logo.png" alt="이지스퍼블리싱로고" /></button></div> 
    		<div class="system">
    			<button class="login" v-b-modal.login>로그인</button>
    			<button class="member" v-b-modal.member>회원가입</button>
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
    
    <b-modal id="login" class="modal" hide-footer>
		  <template #modal-title>
        <i class="bi bi-file-person" />
        로그인
      </template>
      <div class="modalcontainer">
        <div class="loginform">
          <label for="id"><i class="bi bi-file-person " />아이디</label>
          <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
          <label for="pass"><i class="bi bi-lock" />패스워드</label>
          <b-form-input type="password" id="pass" placeholder="패스워드를 입력해 주세요"/>
        </div>
        <div class="btnwrap">
          <b-button variant="login"  @click="$bvModal.hide('bv-modal-login')">로그인</b-button>
        </div>
      </div>
	  </b-modal>

    <b-modal id="member" class="modal" hide-footer>
			<template #modal-title>
        <i class="bi bi-clipboard-check" /> 회원가입
      </template>
      <div class="modalcontainer">
        <b-form @submit="Joinmember">
          <b-form-group
            id="form-group1"
            label="아이디"
            label-for="id"
            description="4 ~ 15자리 이내의 영문과 숫자로만 입력 하세요"
          >
            <b-form-input
              id="id"
              v-model="form.id"
              type="text"
              placeholder="아이디를 작성하여 주세요"
              required
            ></b-form-input>
            <b-button>중복확인</b-button>
          </b-form-group>
          <b-form-group
            id="formid2"
            label="비밀번호"
            label-for="password"
            description="8자리 이상의 영문과 숫자로만 입력 하세요"
          >
            <b-form-input
              id="password"
              v-model="form.pass"
              type="password"
              placeholder="사용할 비밀번호를 작성하여 주세요"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="formid3"
            label="이지스퍼블리싱 메일링 수신"
            label-for="mailing"
            description="※ 메일링 수신을 허락하시면 이지스퍼블리싱의 IT 신간 소식과 무료 전자책, 이벤트 소식, 독자 혜택을 받으실 수 있습니다."
          >
            <b-form-radio value="Y" v-model="form.mail">예</b-form-radio>
            <b-form-radio value="N" v-model="form.mail">아니오</b-form-radio>
          </b-form-group>
          <b-form-group
            id="formid4"
            label="관심 분야 선택"
            label-for="checkedtype"
            description="※ 관심분야를 선택하세요. 2개 이상 선택이 가능합니다."
          >
            <b-form-checkbox value="html" v-model="form.checkedtype">HTML/CSS</b-form-checkbox>
            <b-form-checkbox value="javascript" v-model="form.checkedtype">자바스크립트</b-form-checkbox>
            <b-form-checkbox value="python" v-model="form.checkedtype">파이썬</b-form-checkbox>
            <b-form-checkbox value="Vue.js" v-model="form.checkedtype">Vue.js</b-form-checkbox>
            <b-form-checkbox value="angular" v-model="form.checkedtype">앵귤러</b-form-checkbox>
            <b-form-checkbox value="react" v-model="form.checkedtype">리액트</b-form-checkbox>
            <b-form-checkbox value="data" v-model="form.checkedtype">자료구조/알고리즘</b-form-checkbox>
            <b-form-checkbox value="cad" v-model="form.checkedtype">오토캐드</b-form-checkbox>
          </b-form-group>
          <div class="btnwrap half">
            <b-button type="submit" variant="login">확인</b-button>
            <b-button type="reset" variant="cancel">취소</b-button>
          </div>
        </b-form>
      </div>
    </b-modal>
  </header>
</template>
<script>
export default {
  name:"Header",
  data(){
    return{
      menulists: [
        {menutext:'도서소개', link:'/book'},
        {menutext:'자료실', link:'/reference'},
        {menutext:'동영상강의', link:'/movieclass'},
        {menutext:'교재샘플', link:'/classsample'},
        {menutext:'회사소개', link:'/company'}
      ],
      form:{
        id:"",
        pass:"",
        mail:"",
        checkedtype:[]
      },
      Topclass:""
    }
  },
  mounted() {
  window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    Joinmember(event){
			event.preventDefault()
			alert(JSON.stringify(this.form))
      this.$nextTick(() => {
      this.form.id = ''
      this.form.pass = ''
      this.form.mail = ''
      this.form.checkedtype = []
      })
		},
    goToPage:function(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target)
      }
    },
    handleScroll(){
      const scrollTop = window.pageYOffset
      const headerTop =document.querySelector('.topmemu').clientHeight
      console.log(scrollTop, headerTop)
      if(scrollTop >= 50){
        this.Topclass="scrollTop"
      }else{
        this.Topclass=""
      }
    },
  }
}
</script>