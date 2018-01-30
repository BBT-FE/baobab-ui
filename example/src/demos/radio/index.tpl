<div class="radio">
  <div style="margin-top: 10px;">
    <RadioGroup :options="options" v-model="selected" type="normal"></RadioGroup>
  </div>

  <div style="margin-top: 10px;">
    <RadioGroup :options="options" v-model="selected" type="check"></RadioGroup>
  </div>

  <div style="margin-top: 10px;">
    <RadioGroup position="left" :options="options" v-model="selected" type="normal"></RadioGroup>
  </div>
</div>
