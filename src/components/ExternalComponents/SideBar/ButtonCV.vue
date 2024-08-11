<template>
  <button class="btnDownloadCV flex items-center justify-center text-weight-bold"
    :class="$q.dark.isActive ? 'dark' : 'light'">
    Download CV
  </button>
</template>

<style lang="scss" scoped>
.btnDownloadCV {
  cursor: pointer;
  border: none;
  width: 45%;
  height: 40px;
  border-radius: 30px;
  -webkit-transition: .3s ease;
  transition: all 0.3s ease;
  font-size: 15px;
  opacity: 0.8;

  &.dark {
    background-color: $dark;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8);
    color: $light !important;

    &:hover {
      color: $primary !important;
      opacity: 1;
      box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8) !important;
    }
  }

  &.light {
    background-color: $light;
    box-shadow: -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001;

    &:hover {
      color: $primary !important;
      opacity: 1;
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
        -4px -4px 6px 0 rgba(116, 125, 136, .2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .5),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3) !important;
    }
  }
}
</style>
