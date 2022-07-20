<template>
  <header class="header bg-white bg-opacity-50 absolute top-0 z-50">
    <div class="header__container grid gap-x-14 gap-y-6 max-w-header m-auto">
      <h1 class="header__logo hover:opacity-75 transition-opacity duration-200">
        <nuxt-link to="/">
          <img src="/images/common/logo_tbg.png" alt="株式会社 鉃鋼ビルディング">
        </nuxt-link>
      </h1>
      <nav class="header__nav header__nav--top">
        <ul class="flex flex-row flex-wrap justify-between items-center">
          <li>
            <nuxt-link to="/greet.html">会社情報</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sdgs.html">SDGsについて</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/greet.html">お問合せ</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/greet.html">English</nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="header__nav header__nav--bottom">
        <ul class="grid grid-cols-evenly-full items-center leading-super-tight">
          <li class="header__item justify-self-stretch border-l border-r border-solid border-blue-base">
            <nuxt-link to="/" class="header__anchor relative before:bg-blue-dark">TOP</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/building/" class="header__anchor relative before:bg-blue-dark">建物情報</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/office/" class="header__anchor relative before:bg-blue-dark">オフィス</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/serviceap/" class="header__anchor relative before:bg-blue-dark">サービスアパートメント</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/business/" class="header__anchor relative before:bg-blue-dark">ビジネスサポート</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/shop/" class="header__anchor relative before:bg-blue-dark">商業施設</nuxt-link>
          </li>
          <li class="header__item justify-self-stretch border-r border-solid border-blue-base">
            <nuxt-link to="/access/" class="header__anchor relative before:bg-blue-dark">アクセス</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    path() {
      return this.$route.path;
    }
  },
  methods: {
    headerNav(i) {
      const anchors = document.querySelectorAll('.header__anchor');
      const active = 'header__anchor--active';
      anchors.forEach(a => {
        if (a.getAttribute('href') === i) {
          a.classList.add(active);
        } else if (a.getAttribute('href') !== i && a.classList.contains(active)) {
          a.classList.remove(active);
        }
      });
    }
  },
  mounted() {
    // headerナビ発火処理（初期化）
    this.headerNav(this.path);
    this.$watch('path', this.headerNav);
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #b7c9e9;
  &__container {
    grid-template-areas: 'a b' 'c c';
    grid-template-columns: minmax(35%, 416px) 1fr;
    align-items: center;
  }
  &__nav {
    &--top {
      grid-area: b;
      li {
        a {
          font-size: rem(12);
        }
      }
    }
    &--bottom {
      grid-area: c;
      .header__item {
        text-align: center;
      }
      .header__anchor {
        display: block;
        font-size: rem(14);
        &::before {
          display: block;
          position: absolute;
          bottom: -7px;
          left: -1px;
          width: calc(100% + 1px);
          height: 2px;
          opacity: 0;
          transition: opacity .3s linear;
        }
        &--active {
          font-weight: bold;
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
