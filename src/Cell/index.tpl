<div class="CellBox" @click="handleClick" :style="{'background-color': bgColor}">
  <div class="Cell" :class="{'baobab-border-bottom': borderBottom}">
  	<div class="Cell--icon" v-if="hasIcon">
  		<slot name="icon"></slot>
  	</div>
  	<slot name="header">
  		<div class="Cell--hd" v-if="title">{{title}}</div>
  	</slot>
  	<slot name="body">
  		<div class="Cell--bd" v-if="content">{{content}}</div>
  	</slot>
  	<i class="Cell--arrow" v-if="hasArrow"></i>
    <slot></slot>
  </div>
</div>
