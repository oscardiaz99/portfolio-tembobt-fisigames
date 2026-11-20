import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from '../server/index.mjs';
test('local API validates requests and returns the prepared metadata',async()=>{
  const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=`http://127.0.0.1:${server.address().port}`;
  const post=(body,headers={'Content-Type':'application/json'})=>fetch(base+'/api/metadata',{method:'POST',headers,body});
  try{
    assert.equal((await fetch(base+'/api/health')).status,200);
    assert.equal((await fetch(base+'/api/metadata')).status,405);
    assert.equal((await fetch(base+'/missing')).status,404);
    assert.equal((await post('{')).status,400);
    assert.equal((await post('{}',{'Content-Type':'text/plain'})).status,415);
    assert.equal((await post('{}')).status,400);
    assert.equal((await post('{}',{'Content-Type':'application/json','Origin':'https://example.invalid'})).status,403);
    assert.equal((await post('x'.repeat(9000))).status,413);
    const payload={game:'Example',title:'Preview',tags:'#one #ONE',channels:['tiktok']};
    assert.equal((await post(JSON.stringify({...payload,game:' '}))).status,422);
    const response=await post(JSON.stringify(payload));assert.equal(response.status,200);assert.deepEqual((await response.json()).hashtags,['#one']);
  }finally{await new Promise(resolve=>server.close(resolve));}
});
