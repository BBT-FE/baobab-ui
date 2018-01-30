  <div class="Tab-Plugin baobab-border-bottom":class="{'overflow-style': isOverFlow}" :style="{'backgroundColor': bgColor}">
    <div class="tab-item-wrapper" v-for="(item,index) in tabList" @click="changeActive(index,item)" :class="{'overflow-style': isOverFlow}">
      <div class="tab-item" :class="{'isActive': activeIndex === index ? true : false,'isChangeColor': bgColor !== defaultColor ? true : false}" >
        <div class="badge--wrapper"><Badge :tipNum="item.value" v-if="item.hasBadge === true"></Badge></div>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
