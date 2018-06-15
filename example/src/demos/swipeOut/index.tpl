<div class="swipeOut">
  <SwipeOut>
    <SwipeOutItem v-for="(list, index) in lists" :data-id="list.id">
      <div class="swipe-content">
        <h3>{{list.title}}</h3>
        <p>{{list.tips}}</p>
      </div>
      <div slot="btns" class="swipeOut--btns" @click="delbtns(list, index)">
        删除
      </div>
    </SwipeOutItem>
  </SwipeOut>
</div>
