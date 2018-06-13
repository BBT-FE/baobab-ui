<div class="slideOuter">
  <SlideOuter @onremove="del">
    <SlideOuterItem v-for="(list, index) in lists" :data-id="list.id">
      <div class="slide-content">
        <h3>{{list.title}}</h3>
        <p>{{list.tips}}</p>
      </div>
    </SlideOuterItem>
  </SlideOuter>
</div>
