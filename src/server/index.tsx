export function serverLogin({ name, password }:any) {
  return new Promise((res, rej)=>{
    if(password !== '123') {
      res({ type: 2 });
      return;
    }

    setTimeout(()=>{
      res({ type: 1 });
    },2000)
  });
}
