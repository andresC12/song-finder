import http from "@/http-util";

class SongService {
  get(search: any): Promise<any> {
    return http.get(`/search?q=${search}`);
  }
}

export default new SongService();
