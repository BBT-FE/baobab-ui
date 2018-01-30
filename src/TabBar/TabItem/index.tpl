<div class="TabItem" @click="handleClick" :class="{'selected': selected}">
  <div class="TabItem--main">
    <div class="TabItem--icon" v-if="hasIcon">
      <slot name="icon" v-if="selected === false"></slot>
      <slot name="icon-selected" v-if="selected === true"></slot>
      <slot name="icon-disabled" v-if="selected === undefined"></slot>
      <div class="TabItem--badge" v-if="hasIcon">
        <slot name="badge"></slot>
      </div>
    </div>
    <div class="TabItem--title" :class="{'TabItem--disabled': selected === undefined && to === undefined, 'TabItem--noIcon': !hasIcon}">
      {{title}}
      <div class="TabItem--badge--noIcon" v-if="!hasIcon">
        <slot name="badge"></slot>
      </div>
    </div>
  </div>
</div>
