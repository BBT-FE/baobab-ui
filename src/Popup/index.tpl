<Modal v-model="visible" :zIndex="zIndex" bgColor="rgba(0, 0, 0, .6)" anim="fade" :dismissOnClick="true">
  <transition :name="conf.anim">
    <div v-show="visible" class="baobab-popup" :style="conf.style">
      <slot></slot>
    </div>
  </transition>
</Modal>
