<Modal v-model="visible" bgColor="rgba(0, 0, 0, .6)" anim="fade" zIndex="zIndex" :dismissOnClick="true">
  <transition name="baobab--anim--bottomUp">
    <div class="baobab-actionSheet" v-show="visible">
      <div class="baobab-actionSheet--title" v-if="title">{{title}}</div>
      <div class="baobab-actionSheet--options">
        <div
          class="baobab-actionSheet--option baobab-border-top"
          v-for="(opt, i) in options"
          :style="{color: getFontColor(opt)}"
          @click="handleClick(i)"
        >
          {{opt.text}}
        </div>
      </div>
      <div
        class="baobab-actionSheet--option baobab-actionSheet--cancel"
        :style="{color: tintColor}"
        @click="hide"
        v-if="hideCancel == false"
      >
        {{ cancleBtnText }}
      </div>
    </div>
  </transition>
</Modal>
