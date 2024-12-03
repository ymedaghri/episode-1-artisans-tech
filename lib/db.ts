
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

type ticket = {
  name: string;
  description: string;
};

export type Repository = {
  name: string;
  description: string;
  clone_url: string;
  main_branch: string;
}

type Data = {
  repositories: Array<Repository>;
  releases: Array<{ id:string; name: string; tickets: ticket[];}>;
};

const adapter = new JSONFile<Data>('db.json');
const db = new Low<Data>(adapter, {
  repositories: [
    {name:'events-api', description:'Fake events api repository to test the nextjs-deployer', clone_url:'https://github.com/ymedaghri/fake-events-api.git', main_branch:"develop"},
    {name:'marketplace-app', description:'Fake Marketplace frontEnd App repository to test the nextjs-deployer', clone_url:'https://github.com/ymedaghri/fake-marketplace-app.git', main_branch:"main"},
    {name:'users-api', description:'Fake users api repository to test the nextjs-deployer', clone_url:'https://github.com/ymedaghri/fake-users-api.git', main_branch:"main"},
    {name:'guests-api', description:'Fake guests api repository to test the nextjs-deployer', clone_url:'https://github.com/ymedaghri/fake-guests-api.git', main_branch:"main"},    
  ],
  releases: [
    {id:'release_1.16.0', name: 'Release 1.16.0', tickets: [{name: 'US-100', description: 'Printing User Invoice containing billing address'},{name: 'US-102', description: 'Sending guest invitations'},]},
    {id:'release_1.17.0', name: 'Release 1.17.0', tickets: [{name: 'US-103', description: 'Creating Events for marketplace animations'},]},
  ]
});

export async function getDb() {
  await db.read();
  return db;
}

