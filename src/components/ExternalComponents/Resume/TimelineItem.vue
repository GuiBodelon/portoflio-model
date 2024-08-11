<template>
  <div class="timeline-item clearfix">
    <div class="left-part">
      <div class="item-company text-weight-bold" :class="$q.dark.isActive ? '' : 'light'">{{ company }}</div>
      <div class="item-period text-weight-light" :class="$q.dark.isActive ? '' : 'light'">{{ period }}</div>
      <div class="item-period text-weight-light" :class="$q.dark.isActive ? '' : 'light'">{{ period2 }}</div>
    </div>
    <div class="divider"></div>
    <div class="right-part">
      <div class="item-title text-weight-bold">{{ title }}</div>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

export interface TimelineItemProps {
  company: string;
  period: string;
  period2: string;
  title: string;
  description: string;
}

// Configuração das propriedades padrão
withDefaults(defineProps<TimelineItemProps>(), {
  company: '',
  period: '',
  period2: '',
  title: '',
  description: '',
});
</script>

<style lang="scss" scoped>
.timeline-item {
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 15px;

  &:last-child {
    padding-bottom: 0;
  }

  .left-part {
    width: 30%;
    display: table-cell;
    padding-right: 25px;
    min-height: 100%;
    text-align: right;
    vertical-align: top;
  }

  .right-part {
    width: 70%;
    display: table-cell;
    padding-left: 25px;
    padding-right: 15px;

    p,
    p>* {
      font-size: 14px;
    }
  }

  .divider {
    position: absolute;
    top: 0;
    left: 30%;
    bottom: 0;
    width: 1px;
    background-color: #444;

    &:before {
      content: '';
      display: block;
      position: absolute;
      margin-top: 4px;
      width: 17px;
      height: 17px;
      margin-left: -8px;
      border-radius: 10px;
      background-color: #5050f5;
      opacity: 0.25;
      z-index: 0;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      margin-top: 8px;
      width: 9px;
      height: 9px;
      margin-left: -4px;
      background-color: #222;
      border-radius: 5px;
      border: 2px solid #5050f5;
      z-index: 1;
    }
  }

  .item-title {
    font-size: 16px;
    margin-bottom: 3px;
  }

  .item-period {
    color: #aaa;
    margin: 3px 0;
    font-size: 14px;
    line-height: 1.4em;
    &.light{
      color: #000 !important;
    }
  }

  .item-company {
    display: block;
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 1.45em;
    color: #a5a6a7;
    &.light{
      color: #000 !important;
    }
  }

  &:last-child .right-part {
    padding-bottom: 0;
  }

  .item-logo {
    display: block;
    margin-bottom: 10px;

    img {
      max-height: 40px;
    }
  }
}


@media only screen and (max-width: 480px) {
  .section-title-block.first-style .section-description {
    margin: 7px 0 0;
    width: 100%;
  }

  .portfolio-grid figure {
    width: 100%;
  }

  .portfolio-grid.three-columns figure,
  .portfolio-grid.two-columns figure {
    width: 100%;
  }

  .portfolio-grid figure,
  .portfolio-grid.two-columns figure,
  .portfolio-grid.three-columns figure,
  .portfolio-grid.four-columns figure,
  .portfolio-grid.five-columns figure {
    width: 100%;
  }

  .timeline-second-style .timeline-item {
    position: relative;
    display: block;
  }

  .timeline-second-style .left-part {
    width: 100%;
    display: block;
    padding-left: 25px;
    min-height: 100%;
    text-align: left;
  }

  .timeline-second-style .divider {
    left: 0;
  }

  .timeline-second-style .right-part {
    width: 100%;
    display: block;
    padding-left: 25px;
    padding-right: 0;
  }

  .single-page-content .post-content {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .controls.two-columns .right-column,
  .controls.two-columns .left-column {
    float: none;
    margin: 0;
    width: 100%;
  }
}
</style>
