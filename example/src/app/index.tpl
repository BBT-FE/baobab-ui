<div>
  <div class="backWrapper" v-if="!visiable && $route.path !== '/pullRefresh-Example'">
    <div class="backWrapper--main">
      <div @click="goHome" class="arrow--back">
        <i class="back--icon"></i>
        <span class="back--btn">返回</span>
      </div>
      <p class="back--title">{{/\/(.*)/.exec($route.path)[1]}}</p>
      <p class="back--dots">
        <i class="back--dot"></i>
        <i class="back--dot"></i>
        <i class="back--dot"></i>
      </p>
    </div>
  </div>

  <!-- 路由加载显示区域 -->
  <router-view></router-view>

  <TabBar fixed bgcolor="rgba(255,255,255,1)" :visiable="visiable">
    <TabItem title="关于" to="/About" :selected="$route.path === '/About'">
      <img src="../../images/icon_about.svg" slot="icon">
      <img src="../../images/icon_about_selected.svg" slot="icon-selected">
      <Badge tipNum="1" slot="badge"></Badge>
    </TabItem>
    <TabItem title="示例" to="/Demos" :selected="$route.path === '/Demos'">
      <img src="../../images/icon_example.svg" slot="icon">
      <img src="../../images/icon_example_selected.svg" slot="icon-selected">
      <Badge tipNum="22" slot="badge"></Badge>
    </TabItem>
    <TabItem title="更多" @click="alert">
      <img src="../../images/icon_more_disabled.svg" slot="icon-disabled">
    </TabItem>
  </TabBar>
</div>
