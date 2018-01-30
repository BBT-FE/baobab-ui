<div class="B-TextArea" :class="{'B-TextArea-title': label}">
  <div class="B-TextArea--hd" v-if="label">
    <span>{{label}}</span>
  </div>
  <div class="B-TextArea--bd">
    <textarea
      :name="name"
      v-model="val"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
      :style="textareaStyles"
      :maxlength="max"
      @blur="$emit('on-blur')"
      @focus="$emit('on-focus')"
      :readonly="readonly">
    </textarea>
    <div class="B-TextArea--bd-max" v-if="max && showCounter"><span :class="{'startInput': val.length > 0}">{{val.length}}</span>/{{max}}</div>
  </div>
</div>
