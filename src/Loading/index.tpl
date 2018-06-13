<div class="baobab-loading" v-show="visible" :style="{zIndex: zIndex}">
  <div class="baobab-loading--main" :class="{'baobab-loading-main--message': message}">
    <Spinner foreColor="#fff" bgColor="#4e4e4e"></Spinner>
    <div class="baobab-loading--message" v-show="message">{{message}}</div>
  </div>
</div>
