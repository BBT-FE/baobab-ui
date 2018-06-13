<transition :name="animName">
	<div
	class="baobab-modal"
  ref="modal"
	:style="{'backgroundColor': bgColor, 'zIndex': zIndex}"
	v-show="visible"
	@click="handleClick"
	>
	<slot></slot>
</div>
</transition>
