<div >
  <p style="margin-top: 92px;" class="modal--btn" @click="open('bottomUp', 'A')">Open The Modal by BottomUp Animation (DismissOnClick)</p>

  <p class="modal--btn" @click="open('none', 'A')">Open The Modal By No Animation (DismissOnClick)</p>

  <p class="modal--btn" @click="open('fade', 'A')">Open The Modal By Fade Animation (DismissOnClick)</p>

  <p class="modal--btn" @click="open('bottomUp', 'B')">Open The Modal by BottomUp Animation</p>

  <p class="modal--btn" @click="open('none', 'B')">Open The Modal By No Animation</p>

  <p class="modal--btn" @click="open('fade', 'B')">Open The Modal By Fade Animation</p>

  <p class="modal--btn" @click="open('fade', 'C')">Open The Modal By Fade Animation</p>

  <Modal v-model="visibleA" zIndex="10" bgColor="rgba(0, 0, 0, .6)" :anim="anim" :dismissOnClick="true">
    <div class="modal--dialog" @click="visibleA = false">
      <div class="modal--dialog-main">
        Click Every Field to Close Modal
      </div>
    </div>
  </Modal>

  <Modal v-model="visibleB" zIndex="10" bgColor="rgba(0, 0, 0, .6)" :anim="anim">
    <div class="modal--dialog">
      <div class="modal--dialog-main"  @click="visibleB = false">
        Click Dialog to Close Modal
      </div>
    </div>
  </Modal>

  <Modal v-model="visibleC" zIndex="10" bgColor="rgba(255, 255, 255, .94)" :anim="anim">
    <div class="modal--dialogC">
      <div class="modal--dialogC-title">提示标题</div>
      <div class="modal--dialogC-desc">{{descC}}</div>
      <div class="modal--dialog--close" @click="visibleC = false"></div>
    </div>
  </Modal>
</div>
