<li class="baobab-swipe-out-item" :style="itemStyle">
  <div class="baobab-swipe-out-item-box"
  @touchstart.capture="start"
  @touchmove.capture="move"
  @touchend.capture="end"
  >
    <slot></slot>
  </div>
  <div class="baobab-swipe-out-item-btns" ref="btns">
    <slot name="btns">
      <div class="baobab-swipe-out-item-btn" @click="delItem">删除</div>
    </slot>
  </div>
</li>
