import PocketBase from 'pocketbase';

const pb = new PocketBase('https://solbase.zeabur.app');

export async function login() {
  await pb.collection('users').authWithPassword(
    'DjQ46AqqUjM4c3nH5heYgwBMrh9hCGETaZcGjEE66F2R',
    'alahome8888',
  );
}

export async function deployForm(schema: any) {
  const data = {
    "schema": schema,
    "owner": pb.authStore.model?.id,
  };

  const result = await pb.collection('forms').create(data);
  return result;
}

export async function submitForm(data: any, formId: string) {
  const submitData = {
    "data": data,
    "form": formId,
  };

  const result = await pb.collection('submits').create(submitData);
  return result;
}



export async function listForms() {
  const resultList = await pb.collection('forms').getList(1, 50);

  return resultList;
}

export async function listSubmits() {
  const resultList = await pb.collection('submits').getList(1, 50);

  return resultList;
}
