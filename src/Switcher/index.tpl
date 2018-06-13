<div class="baobab-switcher" :class="{'baobab-switcher--noText': !isText}" :style="{backgroundColor: on ? onColor : offColor}" @click="handleClick">
  <div class="baobab-switcher--text">{{onText}}</div>
  <div class="baobab-switcher--text">{{offText}}</div>
  <div class="baobab-switcher--slider" :class="{'baobab-switcher--open': on}"></div>
</div>
