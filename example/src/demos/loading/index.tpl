<div class="loading">
  <CellGroup>
    <Cell title="Loading">
      <Switcher v-model="val1" @click="handle"></Switcher>
    </Cell>

    <Cell title="Loading-Message">
      <Switcher v-model="val2" @click="handle('正在加载')"></Switcher>
    </Cell>
  </CellGroup>
</div>
