const{test,expect}=require('@playwright/test')

let myid;
test("ApiTest",async({request})=>{

       const reponse=await request.get("https://reqres.in/api/users?page=2")
       const data=await reponse.json()
       console.log(">>>>>>>>>>>>>>>>>>",data)
       expect(await reponse.status()).toBe(200)

})

test("postMethod",async({request})=>{
      const resp=await request.post("https://reqres.in/api/users",
                    
                 {
                     data:{
                                "name": "sachin",
                                "job": "QA architect"
                     },
                     headers:{"Content-type":"application/json"}
                 }

      )
      expect(await resp.status()).toBe(201)
      const MyID=await resp.json()
      myid=MyID.id;

})

test("putMethod",async({request})=>{
       const resp=await request.put("https://reqres.in/api/users/"+myid,
                     
                  {
                      data:{
                                 "name": "sachin",
                                 "job": "CEO"
                      },
                      headers:{"Content-type":"application/json"}
                  }
 
       )
       const MyID=await resp.json()
       console.log(MyID)
 
 })
