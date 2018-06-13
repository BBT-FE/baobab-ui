<Cell>
	<div class="baobab-field--label" slot="header" v-if="label">{{label}}</div>
	<div class="baobab-field--label" v-if="!label && hasLabelSlot" slot="header">
		<slot name="label"></slot>
	</div>
	<div class="baobab-field--bd" slot="body">
		<text-input
			:placeholder="placeholder"
			:type="type"
			:align="align"
			:invalid="invalid.value"
			v-model="val"
			@blur="handleBlur"
			@focus="handleFocus"
		></text-input>
	</div>
	<div class="baobab-field--msg" v-show="invalid && invalid.value && invalid.msg && val">
		<span>{{invalid.msg}}</span>
	</div>
</Cell>
