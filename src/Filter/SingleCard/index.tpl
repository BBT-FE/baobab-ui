<div class="single--wrapper">
  <div class="section--item" v-for="(each,index) in dataList" :class="{'baobab-border-bottom': index === dataList.length-1 ? false :true}"  @click.stop="radio(index)">
    <div class="section--item-name" :class="{'selected':each.isSelected ? true : false}">{{each.name}}</div>
    <div style="flex:1"></div>
    <div class="section--item-selected" v-if="each.isSelected"></div>
  </div>
</div>
