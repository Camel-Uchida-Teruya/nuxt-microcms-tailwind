export const state = () => ({
  slides: [
    { img: '/images/top/img_slide_01@2x.jpg', text: '人と人、街と街 そして時をつなぐ鉃鋼ビルディング', active: true },
    { img: '/images/top/img_slide_02@2x.jpg', text: '伝統の丸の内一丁目が全国と世界を結ぶハブになります。', active: false },
    { img: '/images/top/img_slide_03@2x.jpg', text: '地域内初の中間免震構造や高度なセキュリティ機能 いつも皆様の安全を守ります。', active: false },
    { img: '/images/top/img_slide_04@2x.jpg', text: '快適で開放的な無柱空間 多彩なレイアウトに対応可能なオフィスが皆様のビジネスをサポートします。', active: false },
  ]
})

export const mutations = {
  switchSlide(state, n) {
    state.slides.forEach((slide, index) => {
      if (n === index) {
        slide.active = true
      } else {
        slide.active = false
      }
    });
  }
}
