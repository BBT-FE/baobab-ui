<div class="Loading" v-show="visible" :style="{zIndex: zIndex}">
  <div class="Loading--main" :class="{'Loading--main-message': message}">
    <Spinner foreColor="#fff" bgColor="#4e4e4e"></Spinner>
    <div class="Loading--message" v-show="message">{{message}}</div>
  </div>
</div>
