<div class="Switcher" :class="{'Switcher--noText': !isText}" :style="{backgroundColor: on ? onColor : offColor}" @click="handleClick">
  <div class="Switcher--text">{{onText}}</div>
  <div class="Switcher--text">{{offText}}</div>
  <div class="Switcher--slider" :class="{'Switcher--open': on}"></div>
</div>
