<div class="section--selected baobab-border-bottom">
  <div class="section--item" v-for="(each,index) in dataList"  :class="{'selected':each.isSelected ? true : false}" @click.stop="checkBox(index)">
    <div class="section--item-name" :class="{'selected':each.isSelected ? true : false}">
      <div class="name--wrapper">{{each.name}}</div>
    </div>
  </div>
  <div class="btn--wrapper">
    <div class="btn">
      <Btn type="simple" radius="0px" @click="reset(index)" style="font-size: 16px">重置</Btn>
    </div>
    <div class="btn">
      <Btn type="normal" radius="0px" @click="confirm(index)" style="font-size: 16px">确定</Btn>
    </div>
  </div>
</div>