<div class="Button" :style="style" @click="handleClick">
  <Spinner class="Button--spinner" v-if="loading && disabled" :size="spinnerSize" width="1" :bgColor="spinnerBgColor" :foreColor="foreColor"></Spinner>
  <div class="Button--name"><slot></slot></div>
  <div :style="overlayStyles" v-if="disabled || loading" class="Button--overlay"></div>
</div>
