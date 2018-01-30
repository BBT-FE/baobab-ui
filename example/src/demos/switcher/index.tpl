<div class="switch">
  <CellGroup style="margin-top: 10px;">
    <Cell title="栏目标题">
      <Switcher slot="body" v-model="val"></Switcher>
    </Cell>

    <Cell title="栏目标题">
      <Switcher slot="body" v-model="val1" onText="开" offText="关"></Switcher>
    </Cell>
  </CellGroup>

  <CellGroup style="margin-top: 10px;">
    <Cell title="栏目标题">
      <Switcher slot="body" v-model="val2" onVal="开" offVal="关" onText="开" offText="关" onColor="red" offColor="green" @click="handle(val2)"></Switcher>
    </Cell>
  </CellGroup>
</div>
