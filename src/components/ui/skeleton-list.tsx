import { Skeleton } from "./skeleton";

/**
 * A skeleton component for a list of items.
 *
 * This component is used to display a list of items when the actual content is
 * not yet loaded. It will display a placeholder for each item in the list.
 *
 * <ListSkeleton />
 */
const ListSkeleton = () => {
  return (
    <>
      <p className="flex items-center space-x-4">
        <span className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </span>
      </p>
    </>
  );
};

export default ListSkeleton;
