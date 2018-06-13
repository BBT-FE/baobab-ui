<div class="baobab-button" :style="style" @click="handleClick">
  <Spinner class="baobab-button--spinner" v-if="loading && disabled" :size="spinnerSize" width="1" :bgColor="spinnerBgColor" :foreColor="foreColor"></Spinner>
  <div class="baobab-button--name"><slot></slot></div>
  <div :style="overlayStyles" v-if="disabled || loading" class="baobab-button--overlay"></div>
</div>
