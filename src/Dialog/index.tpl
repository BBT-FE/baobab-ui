<Modal v-model="visible" anim="fade" zIndex="zIndex" bgColor="rgba(0,0,0, .6)">
  <div class="Dialog">
    <transition name="baobab-anim-scale" @after-leave="afterLeave">
      <div class="Dialog--main" v-show="visible" :style="{'width': width}">
        <div class="Dialog--bd">
          <h3 v-show="title" class="Dialog--title">{{title}}</h3>
          <div class="Dialog--content" v-show="content" :style="{paddingTop: title ? '12px' : 0}">
            <div class="Dialog--text">{{content}}</div>
          </div>
          <div class="Dialog--content" v-show="isPrompt" :style="{paddingTop: title ? '12px' : 0}">
            <input v-model="promptVal" class="Dialog--prompt">
          </div>
        </div>
        <div class="Dialog--buttons" :class="{'Dialog--separator': buttons.length === 2}">
          <a
            v-for="btn in buttons"
            class="Dialog--button baobab-border-top"
            :style="{'width': buttons.length === 2 ? '50%' : '100%'}"
            href="javascript:;"
            @click="handleClick(btn)"
          >
            {{btn.title}}
          </a>
        </div>
      </div>
    </transition>
  </div>
</Modal>
