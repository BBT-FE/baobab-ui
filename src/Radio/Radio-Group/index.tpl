<div class="RadioGroup">
  <slot>
    <Radio
      v-for="(option, index) in options"
      :key="index"
      :option="option"
      :position="position"
      v-model="radioVal"
      :type="type"
    >
    </Radio>
  </slot>
</div>
