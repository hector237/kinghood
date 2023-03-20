import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '../assets/styles/custom.scss'

Vue.use(Vuetify);
const light = {
   
        background: "#F3EDDD",
        surface: "#745C40",
        primary: "#F2E5BB",
        "primary-darken-1": "#E6D5A6",
        secondary: "#C0AA83",
        secondary2:'#211C15',
        "secondary-darken-1": "#f27935",
        text: "#0D0D0D",
        
    
}

export default new Vuetify({
    theme: {
        themes: {
            light,
        }
    }
});


/***
 * 211C15
DCCEA5
685B49
8A734B
A28E68
*/