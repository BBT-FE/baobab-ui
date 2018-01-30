<div class="Loadmore" v-show="show">
  <slot>
    <Spinner size="16"></Spinner>
    <span class="Loadmore--desc">{{desc}}</span>
  </slot>
</div>
