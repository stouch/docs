<template>
	<def-list>
		<template v-if="supports.includes('fields')">
			<h4>fields <def-type>optional</def-type></h4>
			<p>Control what fields are being returned in the object. <router-link to="/api/params/fields.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('limit')">
			<h4>limit <def-type>optional</def-type></h4>
			<p>A limit on the number of objects that are returned. Default is <code>100</code>. <router-link to="/api/params/limit.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('offset')">
			<h4>offset <def-type>optional</def-type></h4>
			<p>How many items to skip when fetching data. Default is <code>0</code>. <router-link to="/api/params/offset.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('page')">
			<h4>page <def-type>optional</def-type></h4>
			<p>Cursor for use in pagination. Often used in combination with `limit`. <router-link to="/api/params/page.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('sort')">
			<h4>sort <def-type>optional</def-type></h4>
			<p>How to sort the returned items. <router-link to="/api/params/sort.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('single')">
			<h4>single <def-type>optional</def-type></h4>
			<p>Return the result as if it was a single item. Useful for selecting a single item based on filters and search queries. Will force <code>limit</code> to be 1. <router-link to="/api/params/single.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('status')">
			<h4>status <def-type>optional</def-type></h4>
			<p>Filter items by the given status. <router-link to="/api/params/status.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('filter')">
			<h4>filter <def-type>optional</def-type></h4>
			<p>Select items in collection by given conditions. <router-link to="/api/params/filter.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('q')">
			<h4>q <def-type>optional</def-type></h4>
			<p>Filter by items that contain the given search query in one of their fields. <router-link to="/api/params/q.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('activity_skip')">
			<h4>activity_skip <def-type>optional</def-type></h4>
			<p>Allows you to ignore this request in activity logging. <router-link to="/api/params/activity_skip.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('comment')">
			<h4>comment <def-type>optional</def-type></h4>
			<p>Leave a note detailing what your intention of the request is. <router-link to="/api/params/comment.html">Learn more</router-link></p>
		</template>

		<template v-if="supports.includes('meta')">
			<h4>meta <def-type>optional</def-type></h4>
			<p>What metadata to return in the response. <router-link to="/api/params/meta.html">Learn more</router-link></p>
		</template>
	</def-list>
</template>

<script>
	export default {
		props: {
			supports: {
				type: Array,
				default: () => ([])
			}
		}
	}
</script>