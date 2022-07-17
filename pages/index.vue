<template>
  <div id="top" class="top">
    <main>
      <section class="mv">
        <ul class="mv__slides pt-5625 relative">
          <li
            v-for="slide in this.$store.state.slides"
            :key="slide.text"
            class="mv__slide absolute top-0 w-full h-full"
            :class="{ 'mv__slide--active': slide.active }"
          >
            <h2 class="absolute w-full h-full">
              <img class="absolute w-full h-full object-cover" :src="slide.img" :alt="slide.text">
            </h2>
          </li>
        </ul>
        <ul class="mv__pagination ml-auto mr-auto">
          <li v-for="(slide, index) in this.$store.state.slides" :key="slide.text">
            <button
              class="mv__btn block w-full h-full rounded-full"
              :class="{ 'mv__btn--active': slide.active }"
              @click="$store.commit('switchSlide', index)"
            ></button>
          </li>
        </ul>
      </section>
      <div class="main grid gap-x-8 max-w-screen-lg m-auto pt-10">
        <section class="information">
          <CommonHeading1>お知らせ</CommonHeading1>
          <ul class="grid grid-cols-1 gap-y-6">
            <li v-for="news in contents" :key="news.id" class="information__item grid gap-x-5">
              <time
                :datetime="news.date.slice(0, 10)"
                class="mt-1 text-blue-dark text-xs leading-none"
              >{{ news.date.slice(0, 10).replaceAll('-', '/') }}</time>
              <div v-html="$sanitize(news.content)" class="information__item--right text-sm leading-normal"></div>
            </li>
          </ul>
        </section>
        <section class="building">
          <CommonHeading1>ビルナビゲーション</CommonHeading1>
        </section>
        <aside class="aside">
          <nav>
            <ul class="grid grid-cols-1 gap-y-5">
              <li v-for="banner in banners" :key="banner.alt">
                <a href="/pdf/tekkoavenue_booklet_online.pdf" class="block aside__banner">
                  <img class="w-full" :src="banner.src" :alt="banner.alt">
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'layout1',
  data() {
    return {
      banners: [
        { src: '/images/common/banner_shop.png', alt: 'TEKKO avenue フロアガイド(PDF)はこちら' },
        { src: '/images/common/banner_renewable_electricity.jpg', alt: '再エネ由来電力100%導入' },
        { src: '/images/common/banner_lounge.jpg', alt: 'TEKKO executive lounge & conference rooms' },
        { src: '/images/common/banner_reserve.jpg', alt: '貸会議室予約サイトはこちら' },
        { src: '/images/common/banner_contact.jpg', alt: 'お問合せはこちら' },
        { src: '/images/common/banner_shop_spsite.png', alt: 'TEKKO avenue フロアガイド スマホ用サイトはこちら' },
        { src: '/images/top/img_movie.jpg', alt: '鉄鋼ビルディング　プロモーションビデオ　実写' },
        { src: '/images/common/banner_sdgs.png', alt: 'SDGsについて' },
        { src: '/images/common/banner_panphlet_company.jpg', alt: 'TEKKO BUILDING 鉄鋼ビルディング/会社案内' },
        { src: '/images/common/banner_panphlet_facility.jpg', alt: 'TEKKO BUILDING 鉄鋼ビルディング/施設案内' },
        { src: '/images/common/banner_fb.jpg', alt: 'facebookページ' },
      ]
    }
  },
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 50 }
    });
    return data;
  },
  methods: {
    // apiで取得したaタグがPDFへのリンクだった場合、別タブ遷移にする処理
    pdfLink() {
      const pdfLinks = document.querySelectorAll('a[href$=\'.pdf\']');
      pdfLinks.forEach(link => {
        if (!link.getAttribute('target')) {
          link.setAttribute('target', '_blank');
        }
      });
    }
  },
  mounted() {
    this.pdfLink();
  }
}
</script>

<style lang="scss" scoped>
#top {
  min-height: 2000px;
  .mv {
    &__slide {
      opacity: 0;
      transition: opacity 1s ease-out;
      &--active {
        opacity: 1;
      }
    }
    &__pagination {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      max-width: 100px;
      li {
        width: 8px;
        height: 8px;
        .mv__btn {
          background-color: #b7c9e9;
          transition: background-color .2s ease-out, transform .2s ease-out;
          &--active {
            background-color: #3151a2;
            transform: scale(1.18);
          }
        }
      }
    }
  }
  .main {
    grid-template-areas: 'a c' 'b c';
    grid-template-columns: 1fr 300px;
  }
  .information {
    grid-area: a;
    &__item {
      grid-template-columns: auto 1fr;
      &--right {
        &:deep(a) {
          color: #2868d5;
        }
      }
    }
  }
  .building {
    grid-area: b;
  }
  aside {
    grid-area: c;
  }
}
</style>
