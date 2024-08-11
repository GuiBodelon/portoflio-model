<template>
  <div :class="['q-mt-lg', 'frame', $q.dark.isActive ? 'dark' : 'light']">
    <!-- Botões de redes sociais -->
    <a class="btn" :class="$q.dark.isActive ? 'dark' : 'light'"><i class="fab fa-whatsapp"
        style="color:#25d366"></i></a>
    <a class="btn" :class="$q.dark.isActive ? 'dark' : 'light'"><i class="fab fa-linkedin"
        style="color:#0e76a8"></i></a>
    <a class="btn" :class="$q.dark.isActive ? 'dark' : 'light'"><i class="fab fa-instagram"
        style="color:#c13584"></i></a>
    <a class="btn" :class="$q.dark.isActive ? 'dark' : 'light'"><i class="fas fa-store" style="color:#4169e1"></i></a>
  </div>
</template>
<style lang="scss" scoped>
.frame {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 100%;
  position: relative;
  transition: box-shadow 0.6s cubic-bezier(.79, .21, .06, .81);
  border-radius: 10px;

  &.dark {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
  }

  &.light {
    box-shadow: -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001;
  }
}

.btn {
  height: 35px;
  width: 35px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 0.6s cubic-bezier(.79, .21, .06, .81);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  i {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    i {
      opacity: 1;
    }
  }

  &.dark {
    background: #131419;
    color: rgba(42, 52, 84, 1);
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8);
  }

  &.light {
    background: #e0e5ec;
    color: rgba(42, 52, 84, 1);
    box-shadow: -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001,
      inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001;
  }

  &.dark:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
  }

  &.light:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
      -4px -4px 6px 0 rgba(116, 125, 136, .2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, .5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  }
}
</style>
