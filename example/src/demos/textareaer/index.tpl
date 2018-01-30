<div class="textarea">
  <div class="textarea--item" style="margin-top: 10px;">
    <Textareaer v-model="val1" max="200" cols="3" rows="6"></Textareaer>
  </div>

  <div class="textarea--item" style="margin-top: 10px;">
    <Textareaer v-model="val2" cols="3" rows="6" max="150" :showCounter="true" :label="label"></Textareaer>
  </div>

  <div class="textarea--item" style="margin-top: 10px;">
    <Textareaer v-model="val3" cols="3" rows="6" :showCounter="false" :label="label"></Textareaer>
  </div>

  <div class="textarea--item" style="margin-top: 10px;">
    <Textareaer v-model="val4" cols="3" rows="8" max="180" :showCounter="true" :label="label" @on-blur="onEvent('blur')" @on-focus="onEvent('focus')"></Textareaer>
  </div>

  <div class="textarea--item" style="margin-top: 10px; margin-bottom: 30px;">
    <Textareaer v-model="val5" cols="3" height="250" max="180" readonly :showCounter="true" @on-blur="onEvent('blur')" @on-focus="onEvent('focus')"></Textareaer>
  </div>
</div>
