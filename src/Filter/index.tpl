<div class="filter--wrapper">
	<div class="filter--item" v-for="(item,index) in dataList" v-if="dataList != null">
		<div class="title--wrapper baobab-border-bottom" @click="selected(index)" :class="{'selected':item.selected ? true :false}">
			<span>{{item.title}}</span><!--
			--><i class="right--trangle"></i>
		</div>
		<transition name="fade">
				<div class="section--wrapper baobab-border-bottom" v-show="item.selected">
						<SingleCard :list="item.list" v-if="item.type===typeList[0]" @onchange="getSelected" :parentIndex="index"></SingleCard>
						<CheckCard :list="item.list" v-if="item.type === typeList[1]" @onchange="getSelected" :parentIndex="index"></CheckCard>
				</div>
		</transition>
	</div>
</div>