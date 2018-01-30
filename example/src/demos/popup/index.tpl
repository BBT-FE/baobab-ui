<div class="popup">

  <Cell title="topDown" style="margin-top: 10px;">
    <Switcher v-model="val1"></Switcher>
  </Cell>

  <Cell title="bottomUp">
    <Switcher v-model="val2"></Switcher>
  </Cell>



  <Popup v-model="val1" position="top" zIndex="10">
    <div class="popup--main"></div>
  </Popup>
  <Popup v-model="val2" position="bottom" zIndex="10">
    <div class="popup--main"></div>
  </Popup>
</div>
