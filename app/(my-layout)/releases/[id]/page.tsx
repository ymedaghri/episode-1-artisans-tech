import Link from 'next/link';
import React from 'react'
import SubmoduleCommits from './SubmoduleCommits';

interface ReleaseDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string, pull?: boolean }>;
}

const ReleaseDetailsPage = async ({ params, searchParams }: ReleaseDetailsPageProps) => {    
 const { id } = await params;
 const { name, pull } = await searchParams;

  return (
    <>         
      <div className="my-grid-panel">
        <h2 className="my-standard-text">{name}</h2>
      </div>
      <SubmoduleCommits release_id={id} pull={pull} />      
      <div className="pt-4 flex justify-end space-x-4">          
        <Link href="/releases" className="my-destroy-button disabled:bg-zinc-500">
            Go Back
        </Link>
      </div>    
    </>
  )
}

export default ReleaseDetailsPage

