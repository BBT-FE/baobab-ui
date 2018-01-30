<div class="Radio baobab-border-bottom">
  <div class="Radio--wrap">
    <input class="Radio--input" type="radio" v-model="radioVal" :value="option.value || option" :disabled="option.disabled" >
    <!-- icon -->
    <span class="Radio--icon Radio--icon-normal" :class="{ selected: selected, disabled: option.disabled, position: position === 'left' }" v-if="iconName === 'normal'">
      <i></i>
    </span>

    <span class="Radio--icon Radio--icon-check" :class="{ selected: selected, disabled: option.disabled, position: position === 'left' }" v-if="iconName === 'check'">
      <i></i>
    </span>
    <!-- 自定义label标题 -->
    <slot>
      <span class="Radio--label" :class="{ position: position === 'left' }">{{option.label || option}}</span>
    </slot>
  </div>
</div>
