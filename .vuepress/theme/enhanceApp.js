import "prismjs";
import "prismjs/components/prism-php";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup-templating";

import Prism from "vue-prism-component";
import { Tabs, Tab } from "vue-tabs-component";

export default ({ Vue }) => {
    Vue.component("tabs", Tabs);
    Vue.component("tab", Tab);
    Vue.component("prism", Prism);
};
