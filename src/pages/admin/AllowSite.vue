<template>
  <q-page padding>
    <div class="row items-center q-gutter-x-md">
			<div class="text-h5">허용 사이트</div>
			<q-space></q-space>
      <q-btn label="test" @click="test"></q-btn>
			<q-btn icon="mdi-plus" round color="primary">
				<MyTooltip dir="left">사이트 추가</MyTooltip>
			</q-btn>
    </div>
    <q-table
      v-model:pagination="pagination"
      :columns="columns"
      :rows="rows"
      row-key="id"
      @request="fetchData"
      class="q-mt-md"
    >
      <template #bottom>
        <TableFooter
          :pagination="pagination"
          @request="fetchData"
        >
          <q-btn icon="mdi-delete" round size="sm"></q-btn>
					<q-btn icon="mdi-delete" round size="sm"></q-btn>
					<q-btn icon="mdi-delete" round size="sm"></q-btn>
        </TableFooter>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import allowSiteApi from "src/apis/allowSiteApi";
import TablePageMixin from "src/mixins/TablePageMixin.vue";
import TableFooter from "src/components/etc/TableFooter.vue";
import MyTooltip from "src/components/etc/MyTooltip.vue";

export default defineComponent({
  components: { TableFooter, MyTooltip },
  name: "AllowSite",
  mixins: [TablePageMixin],
  data() {
    return {
      pagination: null,
      rows: [],
      selected: [],
    };
  },
  computed: {
    columns() {
      const arr = [...allowSiteApi.columns];
      arr.push({ name: "CMD" });
      return arr;
    },
    defaultPagination: () => allowSiteApi.defaultPagination,
    fetchApi: () => allowSiteApi.list,
  },
  watch: {
    // "pagination.page": function() {
    // 	this.fetchData({pagination: this.pagination});
    // }
  },
  methods: {
    async test() {
      const data = await allowSiteApi.test();
      this.fetchData();
    },
  },
});
</script>

<style lang='scss' scoped>
</style>