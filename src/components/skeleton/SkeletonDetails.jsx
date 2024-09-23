import './SkeletonDetails.css'

export default function SkeletonDetails () {
  return (
    <div className='container'>
      <div className='Skeleton-Hero'>
        <div className='poster' />
        <div className='details'>
          <div className='year' />
          <div className='title' />
          <div className='categories' />
          <div className='description' />
        </div>
      </div>

      <div className='Skeleton-Credits'>
        <div className='title' />
        <div className='scroller' />
      </div>
    </div>
  )
}
