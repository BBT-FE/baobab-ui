<div class="baobab-section--selected baobab-border-bottom">
  <div class="baobab-section--item" v-for="(each,index) in dataList"  :class="{'selected':each.isSelected ? true : false}" @click.stop="checkBox(index)">
    <div class="baobab-section--item-name" :class="{'selected':each.isSelected ? true : false}">
      <div class="name--wrapper">{{each.name}}</div>
    </div>
  </div>
  <div class="baobab-btn--wrapper"   v-if="!mixed">
    <div class="baobab-btn">
      <Btn type="simple" radius="0px" @click="reset(index)" style="font-size: 16px">重置</Btn>
    </div>
    <div class="baobab-btn">
      <Btn type="normal" radius="0px" @click="confirm(index)" style="font-size: 16px">确定</Btn>
    </div>
  </div>
</div>