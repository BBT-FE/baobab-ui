<li class="baobab-slide-outer-item" :style="itemStyle">
  <div class="baobab-slide-outer-item-box"
  @touchstart.capture="start"
  @touchmove.capture="move"
  @touchend.capture="end"
  >
    <slot></slot>
  </div>
  <div class="baobab-slide-outer-item-btns" ref="btns">
    <slot name="btns">
      <div class="baobab-slide-outer-item-btn" @click="delItem">删除</div>
    </slot>
  </div>
</li>
