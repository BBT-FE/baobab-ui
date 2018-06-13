<div class="baobab-radio baobab-border-bottom">
  <div class="baobab-radio--wrap">
    <input class="baobab-radio--input" type="radio" v-model="radioVal" :value="option.value || option" :disabled="option.disabled" >
    <!-- icon -->
    <span class="baobab-radio--icon baobab-radio-icon--normal" :class="{ selected: selected, disabled: option.disabled, position: position === 'left' }" v-if="iconName === 'normal'">
      <i></i>
    </span>

    <span class="baobab-radio--icon baobab-radio-icon--check" :class="{ selected: selected, disabled: option.disabled, position: position === 'left' }" v-if="iconName === 'check'">
      <i></i>
    </span>
    <!-- 自定义label标题 -->
    <slot>
      <span class="baobab-radio--label" :class="{ position: position === 'left' }">{{option.label || option}}</span>
    </slot>
  </div>
</div>
