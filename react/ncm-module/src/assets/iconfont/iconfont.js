import { createGlobalStyle } from 'styled-components'

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1596804979827'); /* IE9 */
  src: url('iconfont.eot?t=1596804979827#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1596804979827') format('woff'),
  url('iconfont.ttf?t=1596804979827') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1596804979827#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-cd_icon:before {
  content: "\e60c";
}
.icon-search:before {
  content: "\e72e";
}
.icon-message:before {
  content: "\e600";
}
.icon-back:before {
  content: "\e7ea";
}
.icon-love:before {
  content: "\e63f";
}
.icon-add:before {
  content: "\e670";
}
.icon-gengduo:before {
  content: "\e6a1";
}
.icon-Play:before {
  content: "\e732";
}
.icon-menu:before {
  content: "\e71f";
}
.icon-Listener:before {
  content: "\e66b";
}
.icon-add1:before {
  content: "\e601";
}
`