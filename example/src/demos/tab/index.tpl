<div class="tab-example">
  <Tab :tabList="twoList" @onChange="onChange" style="margin-top: 20px" tintColor="red"></Tab>
  <Tab :tabList="threeList" @onChange="onChange" style="margin-top: 20px"></Tab>
  <Tab :tabList="fourList" @onChange="onChange" style="margin-top: 20px"></Tab>

  <Tab :tabList="tabList" @onChange="onChange" style="margin-top: 20px" :selectedIndex="2" fullBorder></Tab>


</div>
