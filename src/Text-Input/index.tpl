<div class="text-input">
  <input
    :style="{'textAlign': align}"
    :type="type"
    :placeholder="placeholder"
    :value="val"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
  >
  <div class="text-input--iconBox">
    <i class="text-input-del" @click="clear" v-show="val" :class="{'text-input--warn': invalid}"></i>
  </div>
</div>
