import Link from 'next/link'
import React from 'react'
import RepositoriesTable from './RepositoriesTable';

const RepositoriesPage = async () => {
  return (    
    <>
      <div className="my-grid-panel">
        <h2 className="my-standard-text">Repositories</h2>      
        <Link className="my-primary-button" href="/repositories/new">
          Add New
        </Link>      
      </div>
      <div className="my-grid-text-panel">
        <p className="flex-nowrap">
          This list shows all the repositories in your git submodules Repository.
        </p>
        <p>
          The {'"name"'} should have the exact same value as {'"submodule ids"'} contained in your
          .gitmodules file.
        </p>
      </div>
      <RepositoriesTable />
    </>
  )
}

export default RepositoriesPage