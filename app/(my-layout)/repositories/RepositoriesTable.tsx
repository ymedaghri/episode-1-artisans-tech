import { getDb } from '@/lib/db';
import React from 'react'
import { revalidatePath } from 'next/cache';
import RepositoryTableRow from './RepositoryTableRow';

async function deleteRepository(repoName: string) {
    "use server";
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const db = await getDb(); 
    db.data.repositories = db.data.repositories.filter((repository) => repository.name !== repoName);
    await db.write();
  
    revalidatePath('/repositories');
  }

const RepositoriesTable = async () => {  
  const db = await getDb(); 
  const data = db.data.repositories;

  return (
    <div className="my-regular-table">
        <div>    
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Uri</th>
            <th>Main branch</th>
            <th className='w-52'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((element, index) => (
            <RepositoryTableRow key={index} repository={element} deleteAction={deleteRepository} />
            ))}            
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default RepositoriesTable