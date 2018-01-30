<div class="tab">
  <div class="tab--header">
    <div class="tab--header--hd">
      <img src="../../../images/jay.jpeg" v-show="selectedB === 0">
      <img src="../../../images/kunling.jpg" v-show="selectedB === 1">
    </div>
    <div class="tab--header--bd">
      <TabBar bgcolor="#F7F7FA">
        <TabItem title="跑步" :selected="selectedB === 0" @click="selectedB = 0"></TabItem>
        <TabItem title="读书" :selected="selectedB === 1" @click="selectedB = 1"></TabItem>
      </TabBar>
    </div>
  </div>

  <TabBar fixed bgcolor="#F7F7FA">
    <TabItem title="首页" :selected="selectedA === 0" @click="selectedA = 0">
      <img src="../../../images/icon_tab_demoA.svg" slot="icon">
      <img src="../../../images/icon_tab_demoA_selected.svg" slot="icon-selected">
    </TabItem>
    <TabItem title="关于" :selected="selectedA === 1" @click="selectedA = 1">
      <img src="../../../images/icon_tab_demoB.svg" slot="icon">
      <img src="../../../images/icon_tab_demoB_selected.svg" slot="icon-selected">
    </TabItem>
  </TabBar>
</div>
