<template>
  <q-page class="row q-pa-xl text-montserrat" :class="$q.dark.isActive ? '' : 'bg-white'">
    <div class="col-12">
      <PageTitle class="text-h4 text-weight-bold q-mb-md" :firstWord="$t('pages.external.resume.title')" />
    </div>
    <div class="col-12 row q-mt-lg">
      <div class="col-12 col-md-7">
        <PageTitle class="text-h5 text-weight-bold q-mb-md" :firstWord="$t('pages.external.resume.experiences')" />
        <div class="timeline timeline-second-style clearfix">
          <TimelineItem v-for="(item, index) in timelineItems" :key="index" :period="$t(item.period)"
            :period2="$t(item.period2)" :company="$t(item.company)" :title="$t(item.title)"
            :description="$t(item.description)" />
        </div>

        <div class="page-subtitle q-mb-md">
          <div class="text-h5 text-weight-bold block-title">{{ $t('pages.external.resume.education') }}</div>
        </div>
        <div class="timeline timeline-second-style clearfix">
          <TimelineItem v-for="(item, index) in educationItems" :key="index" :period="$t(item.period)"
            :company="$t(item.company)" :title="$t(item.title)" :description="$t(item.description)" />
        </div>
      </div>
      <div class="col-12 col-md-5 q-mt-md">
        <!-- Coding Skills -->
        <PageTitle class="text-h5 text-weight-bold q-mb-md" firstWord="Coding" secondWord="Skills" />
        <SkillsSection v-for="(skill, index) in codingSkills" :key="index" :name="skill.name"
          :percentage="skill.percentage" />
        <!-- Design Skills -->
        <PageTitle class="text-h5 text-weight-bold q-mb-md q-mt-lg" firstWord="Design" secondWord="Skills" />
        <SkillsSection v-for="(skill, index) in designSkills" :key="index" :name="skill.name"
          :percentage="skill.percentage" />
        <!-- Other Skills -->
        <PageTitle class="text-h5 text-weight-bold q-mb-md q-mt-lg" firstWord="Outras" secondWord="Skills" />

        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="code" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsCode" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="dns" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsDevOP" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="fa-solid fa-database" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsDB" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="hub" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsFramework" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="fa-solid fa-book" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsUI" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="fa-brands fa-wordpress" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsWP" :key="skill">{{ skill }}</div>
        </div>
        <div class="knowledges flex justify-start items-center q-gutter-sm q-mt-sm">
          <q-icon name="bug_report" style="font-size: 20px;" />
          <div class="skills" v-for="skill in otherSkillsTest" :key="skill">{{ skill }}</div>
        </div>

        <!-- End of Other Skills -->
      </div>
      <div class="col-12 q-mt-xl">

      </div>
      <div class="col-7">

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TimelineItem, { TimelineItemProps } from 'components/ExternalComponents/Resume/TimelineItem.vue';
import SkillsSection, { SkillProps } from 'components/ExternalComponents/Resume/SkillsSection.vue';
import PageTitle from 'components/ExternalComponents/shared/PageTitle.vue'

const timelineItems = ref<TimelineItemProps[]>([
  {
    period: 'pages.external.resume.timeline.work[0].period',
    period2: 'pages.external.resume.timeline.work[0].period2',
    company: 'pages.external.resume.timeline.work[0].company',
    title: 'pages.external.resume.timeline.work[0].title',
    description: 'pages.external.resume.timeline.work[0].description'
  },
  {
    period: 'pages.external.resume.timeline.work[1].period',
    period2: 'pages.external.resume.timeline.work[1].period2',
    company: 'pages.external.resume.timeline.work[1].company',
    title: 'pages.external.resume.timeline.work[1].title',
    description: 'pages.external.resume.timeline.work[1].description'
  },
  {
    period: 'pages.external.resume.timeline.work[2].period',
    period2: 'pages.external.resume.timeline.work[2].period2',
    company: 'pages.external.resume.timeline.work[2].company',
    title: 'pages.external.resume.timeline.work[2].title',
    description: 'pages.external.resume.timeline.work[2].description'
  },
  {
    period: 'pages.external.resume.timeline.work[3].period',
    period2: 'pages.external.resume.timeline.work[3].period2',
    company: 'pages.external.resume.timeline.work[3].company',
    title: 'pages.external.resume.timeline.work[3].title',
    description: 'pages.external.resume.timeline.work[3].description'
  },
  {
    period: 'pages.external.resume.timeline.work[4].period',
    period2: 'pages.external.resume.timeline.work[4].period2',
    company: 'pages.external.resume.timeline.work[4].company',
    title: 'pages.external.resume.timeline.work[4].title',
    description: 'pages.external.resume.timeline.work[4].description'
  }
]);

const educationItems = ref<TimelineItemProps[]>([
  {
    period: 'pages.external.resume.timeline.education[0].period',
    period2: 'pages.external.resume.timeline.education[0].period2',
    company: 'pages.external.resume.timeline.education[0].company',
    title: 'pages.external.resume.timeline.education[0].title',
    description: 'pages.external.resume.timeline.education[0].description'
  },
  {
    period: 'pages.external.resume.timeline.education[1].period',
    period2: 'pages.external.resume.timeline.education[1].period2',
    company: 'pages.external.resume.timeline.education[1].company',
    title: 'pages.external.resume.timeline.education[1].title',
    description: 'pages.external.resume.timeline.education[1].description'
  },
  {
    period: 'pages.external.resume.timeline.education[2].period',
    period2: 'pages.external.resume.timeline.education[2].period2',
    company: 'pages.external.resume.timeline.education[2].company',
    title: 'pages.external.resume.timeline.education[2].title',
    description: 'pages.external.resume.timeline.education[2].description'
  },
  {
    period: 'pages.external.resume.timeline.education[3].period',
    period2: 'pages.external.resume.timeline.education[3].period2',
    company: 'pages.external.resume.timeline.education[3].company',
    title: 'pages.external.resume.timeline.education[3].title',
    description: 'pages.external.resume.timeline.education[3].description'
  }
]);

const codingSkills = ref<SkillProps[]>([
  { name: 'VueJS', percentage: 95 },
  { name: 'Laravel / Lumen', percentage: 85 },
  { name: 'HTML/CSS/SCSS/Sass', percentage: 100 },
  { name: 'JavaScript', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'SQL Oracle / MySQL', percentage: 90 },
]);

// Design skills data
const designSkills = ref<SkillProps[]>([
  { name: 'Web Design', percentage: 90 },
  { name: 'Figma', percentage: 80 },
  { name: 'AdobeXD', percentage: 65 }
]);

// Other skills data
const otherSkillsDB = ref<string[]>([
  'GraphQL', 'MongoDB'
]);
const otherSkillsDevOP = ref<string[]>([
  'Docker', 'Linux', 'AWS', 'Cloudflare', 'VPS', 'Azure', 'GitLab',
]);
const otherSkillsCode = ref<string[]>([
  'ReactJS', 'Angular 8+', 'Node.JS', 'PHP', 'JQuery', 'AJAX'
]);
const otherSkillsFramework = ref<string[]>([
  'Quasar', 'Nuxt', 'Pinia', 'VueX',
]);
const otherSkillsUI = ref<string[]>([
  'TailwindCSS', 'Bootstrap', 'Bulma', 'Vuetify'
]);
const otherSkillsTest = ref<string[]>([
  'K6', 'Jest'
]);
const otherSkillsWP = ref<string[]>([
  'WordPress', 'Elementor', 'Divi Builder', 'WooCommerce'
]);
</script>

<style scoped lang="scss">
.knowledges {
  list-style: none;
}

.knowledges .skills {
  background-color: #5050f5;
  border-radius: 3px;
  color: #fff;
  padding: 1px 10px;
  font-size: 14px;
}
</style>
