import { defineComponent } from "vue";
import SongService from "@/services/SongService";
import Song from "@/interfaces/Song";
import Response from "@/interfaces/Response";
export default defineComponent({
  name: "Dashboard",
  data() {
    return {
      error: false,
      search: "",
      songs: [] as Song[],
      locales:[
        {key: "es", label:"Español"},
        {key: "en", label:"English"}
      ]
    };
  },
  methods: {
    getAll() {
      if(!this.search){
        this.error=true;
      }else{
        this.error=false;
        const name = this.search.replaceAll(" ", "-");
        SongService.get(name)
        .then((response: Response) => {
          this.songs = response.data.data.slice(0, 15);
          console.log(this.songs);
        })
        .catch((e: Error) => {
          console.log(e);
        });
      }    
    },
  },
});
