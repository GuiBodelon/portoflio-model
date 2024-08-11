<template>
  <div class="skills-info skills-second-style">
    <div class="skill clearfix">
      <h4 class="text-weight-bold">{{ name }}</h4>
      <div class="skill-value text-weight-bold">{{ percentage }}%</div>
      <div class="skill-container">
        <div class="skill-percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

export interface SkillProps {
  name: string;
  percentage: number;
}

// Configuração das propriedades padrão
withDefaults(defineProps<SkillProps>(), {
  name: '',
  percentage: 0,
});
</script>

<style lang="scss" scoped>
/* --- Skills --- */
/* Skills Second Style */
.skills-info {
  &.skills-second-style {
    h4 {
      font-size: 13px;
      line-height: 1.1em;
      position: relative;
      float: left;
      margin: 0 0 4px;
    }
  }
}

.skills-second-style {
  .skill-container {
    position: relative;
    display: inline-block;
    background-color: #222;
    border: 1px solid #5050f5;
    border-radius: 8px;
    box-sizing: border-box;
    height: 10px;
    margin-bottom: 8px;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      background-color: #5050f5;
    }
  }

  .skill-value {
    font-size: 11px;
    line-height: 1.1em;
    position: relative;
    float: right;
    margin: 0 0 4px;
    color: #aaa;
  }

  .skill-percentage {
    background-color: #5050f5;
    border: 2px solid #222;
    border-radius: 9px;
    height: 8px;
    padding: 0;
  }
}

/* --- End of Skills Values --- */
</style>
