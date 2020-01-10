import pageComponents from '@internal/page-components'
import { Tabs, Tab } from "vue-tabs-component";

export default ({ Vue }) => {
    Vue.component("tabs", Tabs);
    Vue.component("tab", Tab);

    for (const [name, component] of Object.entries(pageComponents)) {
		Vue.component(name, component)
	}
};
