'use client';
import React from 'react'

interface RepositoryTableRowProps {
    repository: {name: string, description: string, clone_url: string, main_branch: string};
    deleteAction: (repoName:string) => void;
}
const RepositoryTableRow = ({repository, deleteAction}:RepositoryTableRowProps) => {
  
    const [pending, setPending] = React.useState(false);

    async function handleDelete() {
    
        const confirmed = confirm(`Are you sure you want to delete ${repository.name} ?`);
        if (!confirmed) return;
    
        setPending(true);
        await deleteAction(repository.name);        
      }

   return (
    <tr key={repository.name} className={`${pending ? 'opacity-50 pointer-events-none' : ''}`}>
        <td>{repository.name}</td>
        <td>{repository.description}</td>
        <td>{repository.clone_url}</td>
        <td>{repository.main_branch}</td>
        <td className="space-x-2">
            <button className="my-action-button">
                Edit
            </button>
            <button className="my-destroy-button" onClick={handleDelete}>
                Delete
            </button>            
        </td>
    </tr>
  )
}

export default RepositoryTableRow