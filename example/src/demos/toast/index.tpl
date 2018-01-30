<div class="toast">
  <CellGroup style="margin-top: 10px;">
    <Cell :title="loadingA">
      <Switcher v-model="val1" @click="handle('val1', loadingA)"></Switcher>
    </Cell>
    <Cell :title="loadingB">
      <Switcher v-model="val2" @click="handle('val2', loadingB, '正在加载')"></Switcher>
    </Cell>
  </CellGroup>

  <CellGroup style="margin-top: 10px;">
    <Cell :title="descA">
      <Switcher v-model="val3" @click="handle('val3', 'success', descA)"></Switcher>
    </Cell>
    <Cell :title="descB">
      <Switcher v-model="val4" @click="handle('val4', 'success', descB)"></Switcher>
    </Cell>
    <Cell :title="descC">
      <Switcher v-model="val5" @click="handle('val5', 'failure', descC)"></Switcher>
    </Cell>
    <Cell :title="descD">
      <Switcher v-model="val6" @click="handle('val6', 'wifi', descD)"></Switcher>
    </Cell>
  </CellGroup>

  <CellGroup style="margin-top: 10px;">
    <Cell :title="descE">
      <Switcher v-model="val7" @click="handle('val7', 'text', descE)"></Switcher>
    </Cell>
  </CellGroup>
</div>
