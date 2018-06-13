<div class="baobab-text--input">
  <input
    :style="{'textAlign': align}"
    :type="type"
    :placeholder="placeholder"
    :value="val"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
  >
  <div class="baobab-text-input--iconBox">
    <i class="baobab-text-input--del" @click="clear" v-show="val" :class="{'baobab-text-input--warn': invalid}"></i>
  </div>
</div>
