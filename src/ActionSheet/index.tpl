<Modal v-model="visible" bgColor="rgba(0, 0, 0, .6)" anim="fade" zIndex="zIndex" :dismissOnClick="true">
  <transition name="baobab--anim--bottomUp">
    <div class="ActionSheet" v-show="visible">
      <div class="ActionSheet--title" v-if="title">{{title}}</div>
      <div class="ActionSheet--options">
        <div
          class="ActionSheet--option baobab-border-top"
          v-for="(opt, i) in options"
          :style="{color: getFontColor(opt)}"
          @click="handleClick(i)"
        >
          {{opt.text}}
        </div>
      </div>
      <div
        class="ActionSheet--option ActionSheet--cancel"
        :style="{color: tintColor}"
        @click="hide"
        v-if="hideCancel == false"
      >
        取消
      </div>
    </div>
  </transition>
</Modal>
