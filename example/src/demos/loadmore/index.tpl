<div class="loadmore">
  <div class="loadmore--item" v-for="n in total">{{n}}</div>

  <Loadmore @reachBottom="loadmore" :visible="visible" desc="正在加载..."></Loadmore>
</div>
