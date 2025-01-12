import { CardTasks } from "../Skeleton.styles";

function SkeletonCards ({ count = 1}){
    const skeletons = Array.from({ length: count }, (_, index) => index);

    return (
        <>
            {skeletons.map((_, index) => (
                <CardTasks key={ index }/>
            ))}
        </>
    )
}

export { SkeletonCards };