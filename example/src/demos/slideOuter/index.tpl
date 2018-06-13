<div class="slideOuter">
  <SlideOuter>
    <SlideOuterItem v-for="(list, index) in lists" :data-id="list.id">
      <div class="slide-content">
        <h3>{{list.title}}</h3>
        <p>{{list.tips}}</p>
      </div>
      <div slot="btns" class="slideOuter--btns" @click="delbtns(list, index)">
        删除
      </div>
    </SlideOuterItem>
  </SlideOuter>
</div>
