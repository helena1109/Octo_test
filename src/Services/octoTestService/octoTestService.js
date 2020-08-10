export default class OctoTestService{
 _apiBase = "https://test.octweb.ru/api/pages/index/";
 requestOptions = {
     method: "GET",
     headers:{
        "Content-type": " application/json"
     }
 };
    getBlocks = async ()=>{
        const res = await fetch(this._apiBase, this.requestOptions);
        return await res.json();
    }
}