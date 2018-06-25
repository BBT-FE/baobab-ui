<div class="pullRefresh">
  <PullRefresh :refresh="refresh">
    <div class="pullList" slot="list"  v-for="list in lists">{{list.title}}</div>
  </PullRefresh>
</div>