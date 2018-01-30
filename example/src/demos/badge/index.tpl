<div class="badge">
  <div class="badge--cell">
    <CellGroup>
      <Cell title="默认角标" arrow>
        <Badge slot="body"></Badge>
      </Cell>
      <Cell title="带一位数字角标" arrow>
        <Badge slot="body" tipNum="5"></Badge>
      </Cell>
      <Cell title="带二位数字角标" arrow>
        <Badge slot="body" tipNum="22"></Badge>
      </Cell>
    </CellGroup>
  </div>


  <!-- tab badge -->
  <TabBar fixed>
    <TabItem title="李白" :selected="selected === 0" @click="selected = 0">
      <div slot="badge">
        <Badge tipNum="3"></Badge>
      </div>
    </TabItem>
    <TabItem title="杜甫" :selected="selected === 1" @click="selected = 1">
      <div slot="badge">
        <Badge tipNum="101"></Badge>
      </div>
    </TabItem>
    <TabItem title="鲁迅" :selected="selected === 2" @click="selected = 2">
      <div slot="badge">
        <Badge></Badge>
      </div>
    </TabItem>
  </TabBar>
</div>
