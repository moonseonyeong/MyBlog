import './layout.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='lds-container'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
