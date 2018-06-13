<transition
  name="baobab--anim--fade"
  @after-leave="afterLeave"
  >
  <div
    class="baobab-toast"
    :class="{
      top: position === 'top',
      center: position ==='center',
      bottom: position === 'bottom'
    }"
    v-show="visiable"
    :style="{zIndex: zIndex}"
  >
    <div class="baobab-toast--main" :class="{onlyText: type === 'text', wifi: type === 'wifi', loadingB: type === 'loadingB', loadingA: type === 'loadingA'}">
      <div class="baobab-toast--icon" v-if="type !== 'text'">
        <i class="icon--success" v-if="type === 'success'"></i>
        <i class="icon--failure" v-if="type === 'failure'"></i>
        <i class="icon--wifi" v-if="type === 'wifi'"></i>
        <Spinner v-if="type === 'loadingB'" foreColor="#fff" bgColor="#4e4e4e"></Spinner>
        <i v-if="type === 'loadingA'" class="icon--loadingA"></i>
      </div>
      <div class="baobab-toast--content" v-if="content || type === 'loadingB'">{{content}}</div>
    </div>
  </div>
</transition>
