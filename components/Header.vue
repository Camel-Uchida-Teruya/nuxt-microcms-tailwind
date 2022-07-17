<template>
  <header class="header bg-white bg-opacity-50 absolute top-0 z-50">
    <div class="header__container max-w-header m-auto">
      <h1 class="header__logo">
        <nuxt-link to="/">
          <img src="/images/common/logo_tbg.png" alt="株式会社 鉃鋼ビルディング">
        </nuxt-link>
      </h1>
      <nav class="header__nav header__nav--top">
        <ul>
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
        <ul>
          <li class="header__item">
            <nuxt-link to="/" class="header__anchor">TOP</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/building/" class="header__anchor">建物情報</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/office/" class="header__anchor">オフィス</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/serviceap/" class="header__anchor">サービスアパートメント</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/business/" class="header__anchor">ビジネスサポート</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/shop/" class="header__anchor">商業施設</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/access/" class="header__anchor">アクセス</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const path = window.location.pathname;
    const anchors = document.querySelectorAll('.header__anchor');
    anchors.forEach(a => {
      if (a.getAttribute('href') === path) {
        a.classList.add('header__anchor--active');
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #b7c9e9;
  &__container {
    display: grid;
    grid-template-areas: 'a b' 'c c';
    grid-template-columns: minmax(35%, 416px) 1fr;
    gap: 15px 7%;
    align-items: center;
  }
  &__nav {
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: center;
    }
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
        &--active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
