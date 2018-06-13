<div class="baobab-cellBox" @click="handleClick" :style="{'background-color': bgColor}">
  <div class="baobab-cell" :class="{'baobab-border-bottom': borderBottom}">
  	<div class="baobab-cell--icon" v-if="hasIcon">
  		<slot name="icon"></slot>
  	</div>
  	<slot name="header">
  		<div class="baobab-cell--hd" v-if="title">{{title}}</div>
  	</slot>
  	<slot name="body">
  		<div class="baobab-cell--bd" v-if="content">{{content}}</div>
  	</slot>
  	<i class="baobab-cell--arrow" v-if="hasArrow"></i>
    <slot></slot>
  </div>
</div>
