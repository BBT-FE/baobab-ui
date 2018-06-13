<div class="baobab-loadmore" v-show="show">
  <slot>
    <Spinner size="16"></Spinner>
    <span class="baobab-loadmore--desc">{{desc}}</span>
  </slot>
</div>
