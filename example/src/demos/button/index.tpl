<div>
  <div class="btns">
    <div class="btn--item">
      <Btn type="normal">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn type="simple">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn type="cutout">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn :disabled="true" type="normal">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn :disabled="true" type="simple">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn :disabled="true" type="cutout">按钮</Btn>
    </div>
    <div class="btn--item">
      <Btn style="font-size: 16px" :loading="true" :disabled="true" type="cutout" spinnerBgColor="#c2c2c2" foreColor="#444">按钮</Btn>
    </div>

    <div class="btn--item">
      <Btn tintColor="#F6F6F6" type="normal">按钮</Btn>
    </div>

    <div class="btn--item">
      <Btn type="normal">
        <div class="btn--main">
          <img src="../../../images/icon_wallet.svg" alt="">
          <span style="font-size: 16px">按钮</span>
        </div>
      </Btn>
    </div>

    <div class="small--btns">
      <div class="btn--item">
        <Btn width="56px" height="30px" type="cutout">按钮</Btn>
      </div>

      <div class="btn--item">
        <Btn width="84px" height="30px" type="normal">按钮</Btn>
      </div>

      <div class="btn--item">
        <Btn width="84px" height="30px" type="simple" tintColor="#e6e6e6">按钮</Btn>
      </div>
    </div>

    <div class="btn--item">
      <Btn tintColor="rgb(255, 67, 81)" type="cutout">按钮</Btn>
    </div>

    <div class="btn--item">
      <Btn tintColor="rgb(255, 67, 81)" type="simple">按钮</Btn>
    </div>

    <div class="btn--item">
      <Btn tintColor="rgb(255, 67, 81)" type="normal">按钮</Btn>
    </div>
  </div>
</div>
