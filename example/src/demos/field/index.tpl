<div>
  <!-- 标准 -->
  <div style="margin-top: 10px;">
    <CellGroup>
      <Field label="栏目标题" placeholder="输入框提示内容" v-model="val1" align="left"></Field>
      <Field label="最多五个字" placeholder="输入框提示内容" v-model="val2" align="left"></Field>
    </CellGroup>
  </div>

  <!-- 自定义label -->
  <div style="margin-top: 10px;">
    <CellGroup>
      <Field placeholder="输入框提示内容" align="left" v-model="val3">
        <div class="field--label" slot="label">
          <img src="../../../images/icon_user.svg">
          <span>栏目标题</span>
        </div>
      </Field>
      <Field placeholder="输入框提示内容" align="left" v-model="val4">
        <div class="field--label" slot="label">
          <img src="../../../images/icon_user.svg">
          <span>四个字</span>
        </div>
      </Field>
    </CellGroup>
  </div>

  <!-- 标准 -->
  <div style="margin-top: 10px;">
    <CellGroup>
      <Field label="光标事件" placeholder="输入框提示内容" type="number" v-model="val6" align="left"></Field>
      <Field label="只输入数字" :invalid="invalid" @focus="focus" @blur="blur" placeholder="输入框提示内容" v-model="val5" align="left"></Field>
    </CellGroup>
  </div>

  <!-- 自定义输入表单 - body -->
  <div style="margin-top: 10px;">
    <CellGroup>
      <Cell>
        <div class="field--hd" slot="header">验证码</div>
        <div class="field--bd" slot="body">
          <text-input
            type="tel"
            v-model="val7"
            placeholder="请输入短信验证码"
            class="field--bd--textIpt"
            ></text-input>
          <div class="field--vilidCode">
            <div class="field--vilidCode-btn disabled" v-if="disabled">重新获取({{time}})</div>
            <div v-else class="field--vilidCode-btn" @click="getCode">获取验证码</div>
          </div>
        </div>
      </Cell>
    </CellGroup>
  </div>
</div>
