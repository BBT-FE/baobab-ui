<div class="filter--wrapper" ref="wrapper" >
	<div class="filter--item" v-for="(item,index) in dataList" v-if="dataList != null">
		<div class="title--wrapper baobab-border-bottom" @click="selected(index)" :class="{'selected':item.selected ? true :false}">
			<span>{{item.title}}</span><!--
			--><i class="right--trangle" v-if="item.type !== typeList[2]"></i><!--
				--><i class="right-icon" v-else></i>
		</div>
		<transition name="fade">
				<div class="section--wrapper baobab-border-bottom" v-show="item.selected">
						<SingleCard :list="item.list" v-if="item.type===typeList[0]" @onchange="onsingleCheck" :parentIndex="index"></SingleCard>
						<CheckCard :list="item.list" v-if="item.type === typeList[1]" @onchange="getSelected" :parentIndex="index" @onconfirm="onConfirm"></CheckCard>
						<div class="mix--show" v-if="item.type === typeList[2]" :style="style">
						 	<div class="mix--wrapper" v-for="(son, sIndex) in item.list">
								<div class="mix--item-title">{{son.title}}</div>
								<CheckCard :list="son.list" :parentIndex="sIndex" mixed  @onchange="onSelected" :topIndex="index"></CheckCard>
							</div>
							<div class="btn--wrapper" :class="{'mixed': mixed}">
								<div class="btn">
									<Btn type="simple" radius="0px" @click="reset(index)" style="font-size: 16px">重置</Btn>
								</div>
								<div class="btn">
									<Btn type="normal" radius="0px" style="font-size: 16px" @click="onEnsure(index)">确定</Btn>
								</div>
							</div>
						</div>
				</div>
		</transition>
	</div>
</div>