import React from 'react'
import ReleasesTable from './ReleaseTable'

const ReleasesPage = () => {

  if (!process.env.REPO_PATH) {
    return (
      <div className="flex items-center justify-center min-h-[500px] bg-red-50">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-red-600">Configuration Error</h1>
          <p className="mt-4 text-lg text-gray-700">
            The <strong className="font-semibold">REPO_PATH</strong> environment variable is not set.
          </p>
          <p className="mt-2 text-gray-600">
            Please update your configuration (by adding a .env file containing REPO_PATH=...)
            and restart the application.
          </p>          
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="my-grid-panel">
        <h2 className="my-standard-text">Releases</h2>                  
      </div>
      <div className="my-grid-panel">
        <p>Click on {'"Pull & Deps"'}  or {'"Deps No-Pull"'} to show all the git submodules that contains commits corresponding to the release Tickets. </p>
      </div>
      <ReleasesTable/>
    </>
  )
}

export default ReleasesPage