<transition :name="animName">
	<div
	class="Modal"
  ref="modal"
	:style="{'backgroundColor': bgColor, 'zIndex': zIndex}"
	v-show="visible"
	@click="handleClick"
	>
	<slot></slot>
</div>
</transition>
