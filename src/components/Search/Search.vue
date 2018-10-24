<template>
  <div class="searchBox">
    <div class="search">
      <div class="logo"><img :src="logo"></div>
      <h1>{{title}}</h1>
      <div class="box">
        <vue-instant :suggestion-attribute="suggestionAttribute" v-model="value" :disabled="false" @input="changed" @click-input="clickInput" @click-button="clickButton" @selected="selected" @enter="enter" @key-up="keyUp" @key-down="keyDown" @key-right="keyRight" @clear="clear" @escape="escape" :show-autocomplete="true" :autofocus="false" :suggestions="suggestions" name="customName" placeholder="李春梅" type="custom"></vue-instant>
        <button type="text" title="搜索" class="sbx-custom__search">搜索
        </button>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
          <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13" viewBox="0 0 40 40">
            <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" fill-rule="evenodd" />
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-5" viewBox="0 0 20 20">
            <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm1.35-10.123l3.567 3.568-1.225 1.226-3.57-3.568-3.567 3.57-1.226-1.227 3.568-3.568-3.57-3.57 1.227-1.224 3.568 3.568 3.57-3.567 1.224 1.225-3.568 3.57zM10 18.272c4.568 0 8.272-3.704 8.272-8.272S14.568 1.728 10 1.728 1.728 5.432 1.728 10 5.432 18.272 10 18.272z" fill-rule="evenodd" />
          </symbol>
        </svg>

        <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom">
          <div role="search" class="sbx-custom__wrapper">
            <input type="search" name="search" placeholder="李春梅"  @keyup.enter="enter" autocomplete="off" required="required" class="sbx-custom__input">
            <button type="submit" title="Submit your search query." class="sbx-custom__submit">
              <svg role="img" aria-label="Search">
                <use xlink:href="#sbx-icon-search-13"></use>
              </svg>
            </button>
            <button type="reset" title="Clear the search query." class="sbx-custom__reset">
              <svg role="img" aria-label="Reset">
                <use xlink:href="#sbx-icon-clear-5"></use>
              </svg>
            </button>
            <button type="text" title="搜索" class="sbx-custom__search">搜索
            </button>
          </div>
        </form> -->
      </div>
      <div class="hot">
        <span>热门搜索：</span>
        <span class="hotItem" v-for="item in hotItem" :key="item">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import logo from '../../assets/imgs/Bitmap.svg'
import backImg from '../../assets/imgs/background.png'
export default {
  data() {
    return {
      logo: logo,
      title: '中电传媒人物关系图谱',
      backImg: backImg,
      value: '',
      suggestionAttribute: 'original_title',
      suggestions: [],
      selectedEvent: '',
      hotItem: ['李大毛','张三丰','泓天威']
    }
  },
  components: {},
  methods: {
    clickInput: function() {
      this.selectedEvent = 'click input'
    },
    clickButton: function() {
      this.selectedEvent = 'click button'
    },
    selected: function() {
      this.selectedEvent = 'selection changed'
    },
    enter: function() {
      this.selectedEvent = 'enter'
    },
    keyUp: function() {
      this.selectedEvent = 'keyup pressed'
    },
    keyDown: function() {
      this.selectedEvent = 'keyDown pressed'
    },
    keyRight: function() {
      this.selectedEvent = 'keyRight pressed'
    },
    clear: function() {
      this.selectedEvent = 'clear input'
    },
    escape: function() {
      this.selectedEvent = 'escape'
    },
    changed: function() {
      var that = this
      this.suggestions = []
      axios
        .get(
          'https://api.themoviedb.org/3/search/movie?api_key=342d3061b70d2747a1e159ae9a7e9a36&query=' +
            this.value
        )
        .then(function(response) {
          response.data.results.forEach(function(a) {
            that.suggestions.push(a)
          })
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import 'style.css';
.searchBox {
  background-image: url('../../assets/imgs/background.png');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .box {
      margin-top: 44px;
      position: relative;
    }
    .hot {
      text-align: left;
      margin-top: 17px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #4a4a4a;
      letter-spacing: 0.01px;
      .hotItem {
        color: #4a90e2;
        line-height: 22px;
        margin-left: 12px;
      }
    }
    h1 {
      font-family: PingFangSC-Medium;
      font-size: 40px;
      color: #4a4a4a;
    }
  }
}
</style>
