import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'gt-eesti';
    font-style: normal;
    font-weight: 400;
    src: url('/static/admin2/fonts/gt-eesti-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'gt-eesti';
    font-style: normal;
    font-weight: 700;
    src: url('/static/admin2/fonts/gt-eesti-medium.woff') format('woff');
  }

  @font-face {
    font-family: 'GreycliffCF-Regular';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-Regular.otf');
  }
   
  @font-face {
    font-family: 'GreycliffCF-DemiBold';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-DemiBold.otf');
  }

  @font-face {
    font-family: 'GreycliffCF-DemiBoldOblique';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-DemiBoldOblique.otf');
  }

  @font-face {
    font-family: 'GreycliffCF-Bold';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-Bold.otf');
  }

  @font-face {
    font-family: 'GreycliffCF-Medium';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-Medium.otf');
  }

  @font-face {
    font-family: 'GreycliffCF-ExtraBold';
    src: url('/static/admin2/fonts/OTF/GreycliffCF-ExtraBold.otf');
  }

  #__next {
    height: 100%;
  }

  body {
    font-family: GreycliffCF-Regular;
    line-height: 1.6;
    width: auto !important;
    margin: 0;
    box-sizing: border-box;
    color: #202020;
}

.font-Bold {
    font-family: GreycliffCF-Bold;
}

.font-DemiBold {
    font-family: GreycliffCF-DemiBold;
}

.font-Medium {
    font-family: GreycliffCF-Medium;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.text-uppercase {
    text-transform: uppercase;
}

th {
    text-align: inherit;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-10 {
    margin-top: 10px;
}

.m-t-20 {
    margin-top: 20px;
}

.m-t-30 {
    margin-top: 30px;
}

.m-r-10 {
    margin-right: 10px;
}

.m-r-20 {
    margin-right: 20px;
}

.m-v-10 {
    margin-bottom: 10px;
}

  .ant-input {
    resize: none;
  }

  .tippy-popper {
    max-width: initial !important;
  }

  .ant-tabs-bar {
    background-color: #fff;
    padding: 2px 0px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    border-radius: 4px;
    margin-bottom: 0;
  }

  .ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab {
    margin-bottom: 4px;
  }

  .Popover {
    z-index: 1000;
  }

  .ant-tabs-tab-next.ant-tabs-tab-arrow-show,
  .ant-tabs-tab-prev.ant-tabs-tab-arrow-show {
    background: rgba(232, 232, 232, 0.2);
  }

  .ant-tabs-tab-next-icon:before,
  .ant-tabs-tab-prev-icon:before {
    font-size: 24px;
  }

  .ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content > .ant-tabs-tabpane {
    margin-top: -2px;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #4b72e5;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #4b72e5, 0 0 5px #4b72e5;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #4b72e5;
    border-left-color: #4b72e5;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  .table-row.row-red {
    background-color: rgba(255, 0, 0, 0.2) !important;
  }

  .table-row.row-deep-red {
    background-color: #d8a2a2 !important;
  }

  .table-row.row-green {
    background-color: #cef9ce !important;
  }

  .table-row.row-yellow {
    background-color: #faea98 !important;
  }

  .text-warning {
    color: #ffaa00;
  }
`;

export default GlobalStyles;
