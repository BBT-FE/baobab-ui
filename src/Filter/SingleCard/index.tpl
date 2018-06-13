<div class="baobab-single--wrapper">
  <div class="baobab-section--item" v-for="(each,index) in dataList" :class="{'baobab-border-bottom': index === dataList.length-1 ? false :true}"  @click.stop="radio(index)">
    <div class="baobab-section-item--name" :class="{'selected':each.isSelected ? true : false}">{{each.name}}</div>
    <div style="flex:1"></div>
    <div class="baobab-section-item--selected" v-if="each.isSelected"></div>
  </div>
</div>
