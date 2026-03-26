export default function Skeleton({left, right}){
  return <div className="skeletonContainer">
			<div className="skeletonLeft">{left}</div>
			<div className="skeletonRight">{right}</div>
	</div>;
}