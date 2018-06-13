<div class="filter-example-wrapper">
  <FilterCard :filterList="oneList" @onchange="getFilter" style="margin-top: 20px;"></FilterCard>

  <FilterCard :filterList="filterList" @onchange="getFilter" style="margin-top: 20px;"></FilterCard>

  <FilterCard :filterList="mixFilterList" @onchange="getFilter" style="margin-top: 20px;"></FilterCard>
</div>
